const noop = () => {}
const emptyDirFunc = () => ({
  // used for matchmedia
  addListener   :jest.fn(),
  removeListener:jest.fn(),
})
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true })
Object.defineProperty(window, 'matchMedia', { value: emptyDirFunc, writable: true })

// global.graphql = jest.fn()
