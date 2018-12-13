import actor from '../state/actor'
import style from '../style/style'
import t from '../locales/t'

export default actor(({ language, action }) => (
  <div className="root">
    <div className="buttons">
      <a
        href="#"
        className={language === 'en' ? 'active' : ''}
        onClick={e => {
          e.preventDefault()
          action({
            type: 'changeLanguage',
            payload: { language: 'en' }
          })
        }}>
        {t('english', language)}
      </a>

      <a
        href="#"
        className={language === 'de' ? 'active' : ''}
        onClick={e => {
          e.preventDefault()
          action({
            type: 'changeLanguage',
            payload: { language: 'de' }
          })
        }}>
        {t('german', language)}
      </a>
    </div>

    <style jsx>{`
      .root {
        ${style.layer.languagePicker.root}
      }

      .buttons {
        ${style.layer.languagePicker.buttons}
        position: relative;
      }

      a {
        ${style.button.link}
        margin-right: ${style.padding.tight}};
      }

      a:last-child {
        margin-right: 0;
      }

      .active {
        ${style.state.underline}
      }
    `}</style>
  </div>
), state => ({ language: state.language }))
