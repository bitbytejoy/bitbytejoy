import languages from '../locales/languages'
import _ from 'lodash'

export default (() => {
  let language = (
    typeof localStorage !== 'undefined'
      ? localStorage.getItem('language')
      : null
  )

  if (!language) language = (
    typeof window !== 'undefined' ? window.navigator.language : null
  )

  if (!language || !_.includes(languages, language)) language = 'en'
  else language = language.slice(0, 2)

  return language
})()
