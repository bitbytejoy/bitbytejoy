import style from '../util/style'
import _ from 'lodash'
import ProjectCard from './projectCard'
import Section from './section'

const halfWidth = `calc(50% - ${style.padding.normalHalf})`;

export default ({ projects }) => (
  <div>
    <Section title="Just some reference projects...">
      <div className="cards">
        {_.map(projects, p => (
          <div key={p.title} className="card">
            <ProjectCard
              title={p.title}
              projectUrl={p.projectUrl}
              githubUrl={p.githubUrl}
              projectImageUrl={p.projectImageUrl}
            />
          </div>
        ))}
      </div>
    </Section>

    <style jsx>{`
      @media (min-width: ${ style.breakpoint.tablet }) {
        .card {
          display: inline-block;
          width: ${halfWidth};
          margin-right: ${style.padding.normal};
        }

        .card:nth-child(2n) {
          margin-right: 0;
        }

        .card:last-child {
          width: ${projects.length % 2 == 1 ? '100%' : halfWidth};
        }
      }
    `}</style>
  </div>
)
