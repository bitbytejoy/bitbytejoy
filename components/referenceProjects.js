import style from '../style/style'
import _ from 'lodash'
import ProjectCard from './ProjectCard'
import Section from './Section'
import actor from '../state/actor'
import t from '../locales/t'

const halfWidth = `calc(50% - ${style.padding.normalHalf})`;

export default actor(({ language, projects }) => (
  <div>
    <Section title={t('reference-projects-title', language)}>
      <div className="cards">
        {_.map(projects, p => (
          <div key={p.id} className="card">
            <ProjectCard
              title={p.title[language]}
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
), state => ({
  language: state.language,
  projects: state.referenceProjects
}))
