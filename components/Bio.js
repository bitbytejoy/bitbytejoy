import Section from './Section'
import BioEntry from './BioEntry'
import _ from 'lodash'
import style from '../style/style'
import actor from '../state/actor'
import t from '../locales/t'

export default actor(({ language, entries }) => (
  <div>
    <Section title={t('bio-title', language)}>
      <div className="entries">
        {_.map(entries, b => (
          <div key={b.year} className="entry">
            <BioEntry
              key={b.id}
              year={b.year}
              entries={_.map(
                b.entries,
                e => _.merge(
                  {},
                  e,
                  { title: e.title[language], text: e.text[language] })
              )}/>
          </div>
        ))}
      </div>
    </Section>

    <style jsx>{`
      .entries {
        ${style.layer.card.white}
        padding: 0;
        margin-top: ${style.padding.normal};
      }

      @media (min-width: ${style.breakpoint.phablet}) {
        .entries {
          display: flex;
          flex-wrap: wrap;
        }

        .entry {
          flex: 1 1 auto;
          width: 50%;
        }
      }

      @media (min-width: ${style.breakpoint.tablet}) {
        .entry {
          width: 33.3333%;
        }
      }
    `}</style>
  </div>
), state => ({ language: state.language, entries: state.bio }))
