import React from 'react'
import brains from './brains'
import _ from 'lodash'
import referenceProjects from '../data/referenceProjects'
import toolOpinions from '../data/toolOpinions'
import bio from '../data/bio'
import myselfArticles from '../data/myselfArticles'
import expandArticle from '../actions/expandArticle'
import changeLanguage from '../actions/changeLanguage'

const actions = { expandArticle, changeLanguage }
const state = {
  language: 'en',
  referenceProjects,
  toolOpinions,
  bio,
  myselfArticles
}

export default brains(state, actions, React)
