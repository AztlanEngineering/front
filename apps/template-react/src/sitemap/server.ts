import Server from '@aztlan/react-helpers/ssr/Server'
import renderer from './renderer.ts'

const server = new Server(renderer)
server.listen()
