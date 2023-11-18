import { Server } from '@aztlan/react-helpers/ssr'
import renderer from './renderer'

const server = new Server(renderer, {
  publicPath: './public',
})
server.listen()
