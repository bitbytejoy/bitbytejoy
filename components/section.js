import style from '../util/style'

export default ({ title, children }) => (
  <div className="section">
    <div>
      <h2>{title}</h2>
    </div>
    <div>
      {children}
    </div>

    <style jsx>{`
      .section {
        ${style.layer.section.black}
      }

      h2 {
        ${style.text.h2White}
      }
    `}</style>
  </div>
)
