import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ReferenceProjects from '../components/ReferenceProjects'
import ToolOpinions from '../components/ToolOpinions'
import Bio from '../components/Bio'
import Myself from '../components/Myself'
import appUrl from '../util/appUrl'

export default () => (
  <div>
    <Layout title="bitbytejoy" openGraphUrl={appUrl('')}>
      <Hero/>
      <ReferenceProjects/>
      <ToolOpinions/>
      <Bio/>
      <Myself/>
    </Layout>
  </div>
)
