#!/usr/bin/env node
/**
 * A Node.js script to fetch and save the GraphQL schema from a GitHub repository.
 * It uses environment variables for configuration and
 * supports fetching from a specific git reference.
 */

import https from 'https'
import fs from 'fs/promises'
import dotenv from 'dotenv'
import path from 'path'

// Load environment variables from .env.scripts
dotenv.config({
  path:path.join(
    process.cwd(), '.env.scripts',
  ),
})

const {
  GITHUB_BACKEND_ORG,
  GITHUB_BACKEND_REPO,
  GITHUB_READONLY_PAT,
  DEBUG,
} = process.env

// Convert DEBUG env variable to boolean
const isDebug = DEBUG === 'True'

// GitHub API information
const githubApiHost = 'api.github.com'
const contentEndpoint = `/repos/${GITHUB_BACKEND_ORG}/${GITHUB_BACKEND_REPO}/contents/schema.graphql`
const authToken = GITHUB_READONLY_PAT
const defaultBranch = 'development'

// Get the git reference from command line arguments, or use the default
const selectedRef = process.argv.includes('--ref')
  ? process.argv[process.argv.indexOf('--ref') + 1]
  : defaultBranch

const filename = 'schema.graphql'

/**
 * Process and save the GraphQL schema content.
 * @param {Object} data - The data object from GitHub API response.
 */
async function processContent(data) {
  if (data.content) {
    const decodedContent = Buffer.from(
      data.content, 'base64',
    ).toString('utf-8')
    if (isDebug) {
      console.log(decodedContent)
    }
    await fs.writeFile(
      filename, decodedContent, 'utf8',
    )
    console.log(`${filename} successfully saved`)
  } else {
    console.error('Error in downloading the schema.')
  }
}

/**
 * Perform an HTTPS request to fetch the schema.
 * @param {Function} successCallback - The callback function to process the response.
 */
function performRequest(successCallback) {
  console.log(`Fetching schema from ref=${selectedRef}`)

  const requestOptions = {
    host   :githubApiHost,
    path   :`${contentEndpoint}?ref=${selectedRef}`,
    method :'GET',
    headers:{
      Authorization:`token ${authToken}`,
      'User-Agent' :'Nodejs CI script',
    },
  }

  const req = https.request(
    requestOptions, (res) => {
      res.setEncoding('utf-8')
      let responseString = ''

      res.on(
        'data', (chunk) => {
          responseString += chunk
        },
      )

      res.on(
        'end', () => {
          successCallback(JSON.parse(responseString))
        },
      )
    },
  )

  req.end()
}

performRequest(processContent)
