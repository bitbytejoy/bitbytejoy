const languages = require('../locales/languages')

exports.parseLanguage = acceptLanguageHeader => {
  if (!acceptLanguageHeader) return 'en'
  const language = acceptLanguageHeader.slice(0, 2)
  if (languages.indexOf(language) < 0) return 'en'
  return language
}
