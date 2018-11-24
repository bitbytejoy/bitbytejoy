import projects from '../util/projects'
import toolOpinions from '../util/toolOpinions'
import bioEntries from '../util/bioEntries'
import myselfArticles from '../util/myselfArticles'
import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ReferenceProjects from '../components/referenceProjects'
import ToolOpinions from '../components/toolOpinions'
import Bio from '../components/bio'
import Myself from '../components/myself'

export default ({ openGraphUrl }) => (
  <div>
    <Layout title="bitbytejoy" openGraphUrl={openGraphUrl}>
      <Hero/>
      <ReferenceProjects projects={projects}/>
      <ToolOpinions opinions={toolOpinions}/>
      <Bio entries={bioEntries}/>
      <Myself articles={myselfArticles}/>
    </Layout>
  </div>
)
