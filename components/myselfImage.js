import Section from './section'

export default () => (
  <div>
    <Section title={null}>
      <img src="/static/myself.jpg"/>
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
