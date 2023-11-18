/* eslint-disable no-console */

/* eslint-disable import/no-extraneous-dependencies -- only for dev */
import express from 'express'
/* eslint-enable import/no-extraneous-dependencies */
import path from 'path'
import renderer from './renderer'

console.log('OK => Loading the ssr dev server')

const PORT = process.env.PORT || 3003

const app = express()

const logRequestStart = (req, res, next) => {
  // console.info(`${req.method} ${req.originalUrl}`)
  next()
}

app.use(logRequestStart)

console.log('Static files are served from :', path.resolve(__dirname, '..', 'public'))

/* eslint-disable no-useless-escape -- regex */
app.use('[-a-z1-9\/]+', renderer)
app.use(express.static(path.resolve(__dirname, '..', 'public')))

/* eslint-disable consistent-return */
app.listen(PORT, (error) => {
  if (error) {
    return console.log('something bad happened', error)
  }

  console.log(`🛹 Listening on ${PORT}...`)
})
/* eslint-enable consistent-return */
