/* eslint-disable no-console */

/* eslint-disable import/no-extraneous-dependencies -- only for dev */
import express, {
  Request, Response, NextFunction, Express,
} from 'express'
import path from 'path'

const logRequestStart = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  // console.info(`${req.method} ${req.originalUrl}`)
  next()
}

type ServerOptions = {
  port?: number;
  publicPath?: string | null;
};

class Server {
  private port: number

  private publicPath: string | null

  private app: Express

  constructor(renderer: any, options: ServerOptions = {}) {
    const { port = 3004, publicPath = null } = options

    this.port = port
    this.publicPath = publicPath

    this.app = express()
    this.app.use('[-a-z1-9/]+', renderer)
    this.app.use(logRequestStart)

    if (this.publicPath) {
      const fullPath = path.resolve(process.cwd(), this.publicPath)
      this.app.use(express.static(fullPath))
      console.log(`Static files are served from : ${fullPath}`)
    }
  }

  listen(): void {
    this.app.listen(this.port, (error?: Error) => {
      if (error) {
        console.log('something bad happened', error)
        return
      }

      console.log(`Listening on ${this.port}...`)
    })
  }
}

export default Server
