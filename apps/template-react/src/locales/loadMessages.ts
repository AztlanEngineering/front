export default function loadMessages(locale: string) {
  switch (locale) {
    case 'es':
      return import(/* webpackPrefetch: true */ './es.json')
    default:
      return import(/* webpackPrefetch: true */ './en.json')
  }
}
