
export default function loadMessages(locale: string) {
  switch (locale) {
    case 'es':
      return import('./es.json')
    default:
      return import('./en.json')
  }
}
