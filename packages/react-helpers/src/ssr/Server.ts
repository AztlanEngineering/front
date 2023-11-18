/* eslint-disable no-console */

/* eslint-disable import/no-extraneous-dependencies -- only for dev */
import express, {
  Request, Response, NextFunction, Express,
} from 'express'

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
  publicDir?: string | null;
};

class Server {
  private port: number

  private publicDir: string | null

  private app: Express

  constructor(renderer: any, options: ServerOptions = {}) {
    const { port = 3004, publicDir = null } = options

    this.port = port
    this.publicDir = publicDir

    this.app = express()
    this.app.use('[-a-z1-9/]+', renderer)
    this.app.use(logRequestStart)
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
