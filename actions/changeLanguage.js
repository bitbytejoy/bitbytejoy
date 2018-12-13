import _ from 'lodash'

export default (state, payload) => {
  localStorage.setItem('language', payload.language)
  return _.merge({}, state, { language: payload.language })
}
