import { Server } from '@aztlan/react-ssr'
import renderer from './renderer.js'

const server = new Server(renderer)
server.listen()
