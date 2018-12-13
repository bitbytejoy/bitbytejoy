import Section from './Section'
import imageUrl from '../util/imageUrl'

export default () => (
  <div>
    <Section title={null}>
      <img src={imageUrl('myself.jpg')}/>
    </Section>

    <style jsx>{`
      img {
        display: block;
        margin: auto;
        width: 100%;
        max-width: 550px;
      }
    `}</style>
  </div>
)
