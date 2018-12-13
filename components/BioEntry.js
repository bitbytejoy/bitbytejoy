import _ from 'lodash'
import style from '../style/style'
import BioEntryText from './BioEntryText'

const minHeight = '78px'
const width = '60px'

export default ({ year, entries }) => (
  <div className="bioEntry">
    <div className="year">
      <span>{year}</span>
    </div>
      
    <div className="content">
      {_.map(entries, ({ title, text }) => (
        <div key={title} className="text">
          <BioEntryText title={title} text={text}/>
        </div>
      ))}
    </div>

    <style jsx>{`
      .bioEntry {
        ${style.layer.card.white}
        position: relative;
        min-height: ${minHeight};
      }

      .year {
        ${style.layer.card.black}
        text-align: center;
        position: absolute;
        top: ${style.padding.normal};
        left: ${style.padding.normal};
        width: ${width};
        height: calc(100% - 2 * ${style.padding.normal})
      }

      .year:before {
        content: ' ';
        display: block;
        ${style.layer.card.black}
        padding: 0;
        border-radius: 0;
        width: 4px;
        height: calc(100% + 2 * ${style.padding.normal});
        position: absolute;
        top: -${style.padding.normal};
        right: 0;
      }

      .content {
        box-sizing: border-box;
        padding-left: calc(${style.padding.normal} + 60px);
        width: 100%;
      }

      .year span {
        ${style.text.timeline}
      }

      .text {
        padding-top: ${style.padding.normal};
      }

      .text:first-child {
        padding-top: 0;
      }

      @media (min-width: ${style.breakpoint.phablet}) {
        .year {
          width: calc(100% - 2 * ${style.padding.normal});
          height: auto;
        }

        .year:before {
          top: 0;
          left: -${style.padding.normal};
          height: 4px;
          width: calc(100% + 2 * ${style.padding.normal});
        }

        .content {
          padding-left: 0;
          padding-top: calc(48px + ${style.padding.normal});
        }
      }
    `}</style>
  </div>
)
