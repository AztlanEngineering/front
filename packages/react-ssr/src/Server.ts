/* eslint-disable no-console */

/* eslint-disable import/no-extraneous-dependencies -- only for dev */
import express, {
  Request, Response, NextFunction, Express,
} from 'express'
import path from 'path'

function getPortFromArgs(): number | undefined {
  const args = process.argv
  const portIndex = args.indexOf('-p')
  if (portIndex !== -1 && portIndex < args.length - 1) {
    const portArg = args[portIndex + 1]
    const port = parseInt(
      portArg, 10,
    )
    if (!Number.isNaN(port)) {
      return port
    }
  }
  return undefined // Return undefined if "-p" is not found or the next item is not a number
}

const logRequestStart = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  // console.info(`${req.method} ${req.originalUrl}`)
  next()
}

type ServerOptions = {
  port?      :number;
  publicPath?:string | null;
}

class Server {
  private port:number

  private publicPath:string | null

  private app:Express

  constructor(
    renderer: any, options: ServerOptions = {},
  ) {
    const port = getPortFromArgs() || options.port || 3004
    console.log(
      process.argv, getPortFromArgs(),
    )

    const { publicPath = null } = options

    this.port = port
    this.publicPath = publicPath

    this.app = express()
    this.app.use(
      '[-a-z0-9/]+', renderer,
    )
    this.app.use(logRequestStart)

    if (this.publicPath) {
      const fullPath = path.resolve(
        process.cwd(), this.publicPath,
      )
      this.app.use(express.static(fullPath))
      console.log(`Static files are served from : ${fullPath}`)
    }
  }

  listen(): void {
    this.app.listen(
      this.port, (error?: Error) => {
        if (error) {
          console.log(
            'something bad happened', error,
          )
          return
        }

        console.log(`Listening on ${this.port}...`)
      },
    )
  }
}

export default Server
