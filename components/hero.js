import config from '../config'
import style from '../style/style'
import imageUrl from '../util/imageUrl'
import actor from '../state/actor'
import t from '../locales/t'

export default actor(({ language }) => (
  <div className="root">
    <div className="hero">
      <div className="content">
        <a href={'mailto:' + config.contactEmail}>{t('contact-me', language)}</a>
        <h1>{'bitbytejoy'}</h1>
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
        background-image: url(${imageUrl('hero_background.svg')});
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
), state => ({ language: state.language }))
