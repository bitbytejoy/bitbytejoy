import _ from 'lodash'

export default (state, payload) => {
  return _.merge({}, state, { language: payload.language })
}
