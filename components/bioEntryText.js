import style from '../util/style'
import _ from 'lodash'

export default ({ title, text }) => (
  <div className="root">
    <div className="content">
      <h3>{title}</h3>
      {_.map(text, (t, i) => <p key={i}>{t}</p>)}
    </div>

    <style jsx>{`
      h3 {
        ${style.text.h3Black}
      }

      p {
        ${style.text.p}
        padding-top: ${style.padding.tight};
      }
    `}</style>
  </div>
)
