import { Server } from '@aztlan/react-ssr'
import renderer from './renderer.ts'

const server = new Server(
  renderer, { publicPath: './public' },
)
server.listen()
