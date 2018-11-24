import config from '../util/config'
import style from '../util/style'

export default () => (
  <div className="root">
    <div className="footer">
      <div className="content">
        <h2>{'Thanks for reading...'}</h2>
        <a href={'mailto:' + config.contactEmail}>Contact me</a>
      </div>
    </div>

    <style jsx>{`
      .root {
        ${style.layer.section.whiteFullWidth}
        padding: 0;
      }

      .footer {
        ${style.layer.section.white750}
        background-image: url(/static/hero_background.svg);
        background-repeat: no-repeat;
        background-position: center;
      }

      h2 {
        ${style.text.h2Black}
      }

      a {
        ${style.button.black}
        margin-top: ${style.padding.normal};
      }
    `}</style>
  </div>
)
