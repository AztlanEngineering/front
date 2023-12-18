import Server from '@aztlan/react-helpers/ssr/Server'
import renderer from './renderer'

const server = new Server(
  renderer, {
    publicPath:'./public',
  },
)
server.listen()
