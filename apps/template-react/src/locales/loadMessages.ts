export default function loadMessages(locale: string) {
  switch (locale) {
    case 'es':
      return import(/* webpackPreload: true */ './es.json')
    default:
      return import(/* webpackPreload: true */ './en.json')
  }
}
