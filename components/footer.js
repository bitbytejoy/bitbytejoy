import config from '../config'
import style from '../style/style'
import imageUrl from '../util/imageUrl'
import t from '../locales/t'
import actor from '../state/actor'

export default actor(({ language }) => (
  <div className="root">
    <div className="footer">
      <div className="content">
        <h2>{t('thanks-for-reading', language)}</h2>
        <a href={'mailto:' + config.contactEmail}>{t('contact-me', language)}</a>
      </div>
    </div>

    <style jsx>{`
      .root {
        ${style.layer.section.whiteFullWidth}
        padding: 0;
      }

      .footer {
        ${style.layer.section.white750}
        background-image: url(${imageUrl('hero_background.svg')});
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
), state => ({ language: state.language }))
