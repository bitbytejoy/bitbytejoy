import imageUrl from '../util/imageUrl'

const breakpoint = {
  phone: '320px',
  phablet: '550px',
  tablet: '750px',
  desktop: '1000px',
  desktopHD: '1200px',
  desktopUHD: '1400px'
}

const clearfix = `
  content: ' ';
  clear: both;
  display: block;
  height: 0;
  overflow: hidden;
`

const borderRadius = 'border-radius: 4px;'

const padding = {
  normal: '15px',
  normalHalf: '7.5px',
  tight: '5px',
  button: '12px 15px'
}

const color = {
  black: '#2d2d2d',
  white: '#ffffff',
  gray: 'rgba(43, 43, 43, 0.05)',
  transparent: 'rgba(0, 0, 0, 0)'
}

const fontRoboto = "font-family: 'Roboto', sans-serif;"
const font = {
  robotoLight: `${fontRoboto} font-weight: 300;`,
  robotoBold: `${fontRoboto} font-weight: 700;`,
  robotoBlack: `${fontRoboto} font-weight: 900;`
}

const h3 = `
  margin: 0;
  ${font.robotoBold}
  font-size: 18px;
  letter-spacing: 0.45px;
`

const h2 = `
  margin: 0;
  ${font.robotoBold}
  font-size: 24px;
  letter-spacing: 1.25px;
`

const textButton = `
  text-decoration: none;
  text-align: center;
  ${font.robotoBold}
  font-size: 15px;
  letter-spacing: 0.38px;
  text-transform: uppercase;
`

const textButtonWhite = `
  ${textButton}
  color: ${color.white};
`

const textP = `
  margin: 0;
  padding: 0;
  ${font.robotoLight}
`

const text = {
  button: {
    black: `
      ${textButton}
      color: ${color.black};
    `,
    white: textButtonWhite,
    github: textButtonWhite
  },
  h1: `
    margin: 0;
    ${font.robotoBlack}
    font-size: 50px;
    color: ${color.black};
    letter-spacing: 1.25px;
  `,
  h2Black: `
    ${h2}
    color: ${color.black};
  `,
  h2White: `
    ${h2}
    color: ${color.white};
  `,
  h3Black: `
    ${h3}
    color: ${color.black};
  `,
  h3White: `
    ${h3}
    color: ${color.white};
  `,
  p: `
    ${textP}
    font-size: 15px;
    letter-spacing: 0.38px;
    color: ${color.black};
  `,
  timeline: `
    ${textP}
    font-size: 13px;
    letter-spacing: 0.32px;
    color: ${color.white};
  `
}

const sectionLayerFullWidth = `
  box-sizing: border-box;
  padding: ${padding.normal};
`

const sectionLayer = `
  ${sectionLayerFullWidth}
  margin: auto;
`

const buttonLayer = `
  display: inline-block;
  ${borderRadius}
  padding: ${padding.button};
`

const buttonLayerWhite = `
  ${buttonLayer}
  background-color: ${color.white};
`

const cardLayer = `
  box-sizing: border-box;
  ${borderRadius}
  padding: ${padding.normal};
`

const layer = {
  button: {
    black: `
      ${buttonLayer}
      background-color: ${color.black};
    `,
    white: buttonLayerWhite,
    github: `
      ${buttonLayerWhite}
      box-sizing: border-box;
      width: 42px;
      height: 42px;
      background-image: url(${imageUrl('github_logo.svg')});
      background-size: 30px;
      background-repeat: no-repeat;
      background-position: center;
    `,
    transparent: `
      ${buttonLayer}
    `
  },
  section: {
    black: `
      ${sectionLayer}
      max-width: 750px;
      background-color: ${color.black};
    `,
    black550: `
      ${sectionLayer}
      max-width: 550px;
      background-color: ${color.black};
    `,
    black750: `
      ${sectionLayer}
      max-width: 750px;
      background-color: ${color.black};
    `,
    blackFullWidth: `
      ${sectionLayerFullWidth}
      background-color: ${color.black};
    `,
    white750: `
      ${sectionLayer}
      max-width: 750px;
      background-color: ${color.white};
    `,
    whiteFullWidth: `
      ${sectionLayerFullWidth}
      background-color: ${color.white};
    `,
    transparent: `
      ${sectionLayer}
      background-color: ${color.transparent};
    `,
    gray: `
      ${sectionLayer}
      background-color: ${color.gray};
    `,
    gray750: `
      ${sectionLayer}
      background-color: ${color.gray};
      max-width: 750px;
    `,
    grayFullWidth: `
      ${sectionLayerFullWidth}
      background-color: ${color.gray};
    `
  },
  languagePicker: {
    root: `
      position: absolute;
      z-index: 1;
      margin: auto;
      width: 100%;
    `,
    buttons: `
      margin: auto;
      box-sizing: border-box;
      padding: ${padding.normal};
      width: 750px;
      max-width: 100%;
      text-align: right;
    `
  },
  card: {
    white: `
      ${cardLayer}
      background-color: ${color.white};
    `,
    black: `
      ${cardLayer}
      background-color: ${color.black};
    `
  }
}

const button = {
  black: `${layer.button.black} ${text.button.white}`,
  white: `${layer.button.white} ${text.button.black}`,
  github: `${layer.button.github} ${text.button.white}`,
  link: `${layer.button.transparent} ${text.button.black}`
}

const state = {
  underline: `text-decoration: underline;`
}

export default {
  clearfix,
  padding,
  text,
  layer,
  button,
  breakpoint,
  state
}
