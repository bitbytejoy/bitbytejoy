import MyselfImage from './myselfImage'
import Article from './article'
import _ from 'lodash'
import style from '../util/style'
import actor from '../util/actor'

export default actor(({ articles, action }) => (
  <div className="root">
    <div className="content">
      <div>
        <MyselfImage/>
      </div>

      <div className="articles">
        {_.map(articles, a => (
          <div key={a.id} className="article">
            <Article {...a} action={action}/>
          </div>
        ))}
      </div>
    </div>

    <style jsx>{`
      .content {
        ${style.layer.section.black750}
        padding: 0;
      }

      @media (min-width: ${style.breakpoint.phablet}) {
        .articles {
          display: flex;
          flex-wrap: wrap;
        }

        .article {
          flex: 1 1 auto;
          flex-grow: unset;
          width: 50%;
        }
      }
    `}</style>
  </div>
), state => ({ articles: state.articles }))
