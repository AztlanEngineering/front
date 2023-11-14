const noop = () => {}
const emptyDirFunc = () => ({})
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true })
Object.defineProperty(window, 'matchMedia', { value: emptyDirFunc, writable: true })
