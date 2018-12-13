import MyselfImage from './MyselfImage'
import Article from './Article'
import _ from 'lodash'
import style from '../style/style'
import actor from '../state/actor'
import t from '../locales/t'

export default actor(({ language, articles, action }) => (
  <div className="root">
    <div className="content">
      <div>
        <MyselfImage/>
      </div>

      <div className="articles">
        {_.map(articles, a => (
          <div key={a.id} className="article">
            <Article
              {...(_.merge(
                {},
                a,
                { title: a.title[language], text: a.text[language] }
              ))}
              action={action}/>
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
), state => ({ language: state.language, articles: state.myselfArticles }))
