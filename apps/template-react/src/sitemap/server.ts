/* eslint-disable no-console */
import { Server } from '@aztlan/react-helpers/ssr'
import renderer from './renderer'

const server = new Server(renderer)
server.listen()
