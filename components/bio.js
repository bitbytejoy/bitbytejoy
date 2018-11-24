import Section from './section'
import BioEntry from './bioEntry'
import _ from 'lodash'
import style from '../util/style'

export default ({ entries }) => (
  <div>
    <Section title="How my life played out so far...">
      <div className="entries">
        {_.map(entries, b => (
          <div key={b.year} className="entry">
            <BioEntry key={b.year} year={b.year} entries={b.entries}/>
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
)
