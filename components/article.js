import Section from './section'
import _ from 'lodash'
import style from '../util/style'
import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(...arguments)

    this.text = React.createRef()
  }

  componentDidMount() {
    const { id, action } = this.props
    if (this.text.current.clientHeight < 300) this.expandArticle()
  }

  render() {
    const { id, title, text, expanded, action } = this.props;

    return (
      <div>
        <Section title={title}>
          <div className="article">
            <div ref={this.text} className="text">
              {_.map(text, (t, i) => <p key={i}>{t}</p>)}
            </div>

            {!expanded
              ? (
                <div className="readMore">
                  <a href="#" onClick={
                    e => {
                      e.preventDefault()
                      this.expandArticle()
                    }
                  }>Read more...</a>
                </div>
              ) : null}
          </div>
        </Section>

        <style jsx>{`
          .article {
            ${style.layer.card.white}
            margin-top: ${style.padding.normal};
          }

          .text {
            max-height: ${expanded ? 'auto' : '300px'};
            overflow-y: hidden;
          }
          
          .readMore {
            padding-top: ${style.padding.normal};
            text-align: center;
          }

          p {
            ${style.text.p}
            padding-bottom: ${style.padding.normal};
          }

          p:last-child {
            padding-bottom: 0;
          }

          a {
            ${style.button.black}
          }
        `}</style>
      </div>
    )
  }

  expandArticle() {
    const { id, action } = this.props
    if (!action) return
    action({
      type: 'expandArticle',
      payload: { articleId: id }
    })
  }
}
