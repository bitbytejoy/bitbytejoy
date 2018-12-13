import style from '../style/style'
import _ from 'lodash'
import Opinion from './Opinion'
import Section from './Section'
import actor from '../state/actor'
import t from '../locales/t'

export default actor(({ language, opinions }) => (
  <div>
    <Section title={t('tool-opinions-title', language)}>
      <div className="opinions">
        {_.map(opinions, o => (
          <div className="opinion" key={o.id}>
            <Opinion
              title={o.title}
              text={o.text[language]}
              imageUrl={o.imageUrl}
            />
          </div>
        ))}
      </div>
    </Section>

    <style jsx>{`
      .opinion {
        padding-top: ${style.padding.normal};
      }

      @media (min-width: ${style.breakpoint.phablet}) {
        .opinion {
          display: inline-block;
          width: calc(50% - ${style.padding.normalHalf});
          margin-right: 15px;
        }

        .opinion:nth-child(2n) {
          margin-right: 0;
        }
      }
    `}</style>
  </div>
), state => ({ language: state.language, opinions: state.toolOpinions }))
