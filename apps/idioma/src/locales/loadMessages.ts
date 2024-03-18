export default function loadMessages(locale: string) {
  switch (locale) {
    case 'es':
      // @ts-ignore
      return import(/* webpackPreload: true */ './es.json')
    default:
      // @ts-ignore
      return import(/* webpackPreload: true */ './en.json')
  }
}
