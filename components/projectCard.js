import style from '../style/style'
import actor from '../state/actor'
import t from '../locales/t'

export default actor(({ language, title, projectUrl, githubUrl, projectImageUrl }) => (
  <div className="card">
    <div className="content">
      <h3>{title}</h3>
      <div className="actions">
        <a href={projectUrl} target="_blank" className="button">{t('check-it-out', language)}</a>
        <a href={githubUrl} target="_blank" className="githubButton"></a>
      </div>
    </div>

    <style jsx>{`
      .card {
        ${style.layer.card.white}
        margin-top: ${style.padding.normal};
        position: relative;
        height: 320px;
        background-image: url(${projectImageUrl});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .content {
        position: absolute;
        bottom: ${style.padding.normal};
        left: ${style.padding.normal};
      }

      .actions {
        padding-top: ${style.padding.normal};
      }

      h3 {
        max-width: calc(100% - 2 * ${style.padding.normal});
        ${style.text.h3White}
      }

      a {
        float: left;
        margin-right: ${style.padding.normal};
      }

      .actions:after {
        ${style.clearfix}
      }

      .button {
        ${style.button.white}
      }

      .githubButton {
        ${style.button.github}
      }
    `}</style>
  </div>
), state => ({ language: state.language }))
