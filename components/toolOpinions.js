import style from '../util/style'
import _ from 'lodash'
import Opinion from './opinion'
import Section from './section'

export default ({ opinions }) => (
  <div>
    <Section title="What I think about my tools...">
      <div className="opinions">
        {_.map(opinions, o => (
          <div className="opinion" key={o.title}>
            <Opinion
              title={o.title}
              text={o.text}
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
)
