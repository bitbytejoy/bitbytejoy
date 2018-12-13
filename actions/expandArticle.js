import _ from 'lodash'

export default (state, { articleId }) => {
  const oldArticle = _.first(
    _.filter(state.myselfArticles, a => a.id === articleId)
  )
  if (!oldArticle) return state
  const article = _.merge({}, oldArticle, { expanded: true })
  const myselfArticles = _.map(
    state.myselfArticles,
    (a, i) => i === articleId ? article : a
  )
  return _.merge({}, state, { myselfArticles })
}
