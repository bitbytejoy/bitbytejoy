import config from '../util/config'
import style from '../util/style'

export default () => (
  <div className="root">
    <div className="hero">
      <div className="content">
        <a href={'mailto:' + config.contactEmail}>Contact me</a>
        <h1>bitbytejoy</h1>
      </div>
    </div>

    <style jsx>{`
      .root {
        ${style.layer.section.whiteFullWidth}
        padding: 0;
      }

      .hero {
        ${style.layer.section.white750}
        position: relative;
        height: 320px;
        background-image: url(/static/hero_background.svg);
        background-position: center;
        background-repeat: no-repeat;
      }

      .content {
        position: absolute;
        bottom: ${style.padding.normal};
        left: ${style.padding.normal};
      }

      a {
        ${style.button.black}
      }

      h1 {
        ${style.text.h1}
        padding-top: ${style.padding.normal};
      }
    `}</style>
  </div>
)
