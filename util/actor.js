import state from './state'
import articles from './myselfArticles'
import _ from 'lodash'

export default state(
  { articles },
  {
    expandArticle: (state, { articleId }) => {
      const oldArticle = state.articles[articleId]
      if (!oldArticle) return state
      const article = _.merge({}, oldArticle, { expanded: true })
      const articles = _.map(
        state.articles,
        (a, i) => i === articleId ? article : a
      )
      return _.merge({}, state, { articles })
    }
  }
)
