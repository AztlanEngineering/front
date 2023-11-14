/** @type {import('ts-jest').JestConfigWithTsJest} */
import config from '@aztlan/jest-config'

export default {
  preset         :'ts-jest',
  testEnvironment:'jsdom',
  ...config,
}
