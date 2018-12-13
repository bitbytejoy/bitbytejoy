import addIds from '../util/addIds'
import imageUrl from '../util/imageUrl'
import t from '../locales/t'

export default addIds([
  {
    title: {
      en: t('bitbytejoy-personal-website', 'en'),
      de: t('bitbytejoy-personal-website', 'de')
    },
    projectImageUrl: imageUrl('personal-website.jpg'),
    projectUrl: 'http://bitbytejoy.com/',
    githubUrl: 'https://github.com/bitbytejoy/bitbytejoy'
  },
  {
    title: {
      en: t('brainsjs-react-state-manager', 'en'),
      de: t('brainsjs-react-state-manager', 'de')
    },
    projectImageUrl: imageUrl('brainsjs.jpg'),
    projectUrl: 'https://www.npmjs.com/package/brainsjs',
    githubUrl: 'https://github.com/bitbytejoy/brainsjs'
  },
  {
    title: {
      en: t('roku-reactive-simple-roku-app-base', 'en'),
      de: t('roku-reactive-simple-roku-app-base', 'de')
    },
    projectImageUrl: imageUrl('roku-reactive.jpg'),
    projectUrl: 'https://github.com/bitbytejoy/roku-reactive',
    githubUrl: 'https://github.com/bitbytejoy/roku-reactive'
  },
  {
    title: {
      en: t('data-structures-and-algorithms-study', 'en'),
      de: t('data-structures-and-algorithms-study', 'de')
    },
    projectImageUrl: imageUrl('data-structures-and-algorithms.jpg'),
    projectUrl: 'https://github.com/bitbytejoy/data-structures-and-algorithms',
    githubUrl: 'https://github.com/bitbytejoy/data-structures-and-algorithms'
  }
])
