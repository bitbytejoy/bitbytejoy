import Head from 'next/head'
import Footer from './Footer'
import LanguagePicker from './LanguagePicker'
import imageUrl from '../util/imageUrl'
import style from '../style/style'

export default ({ title, children, openGraphUrl }) => (
  <div>
    <Head>
      <meta name="viewport" content="initial-scale=1.0,width=device-width"/>
      <meta property="og:title" content={title}/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={openGraphUrl}/>
      <meta property="og:image" content={imageUrl('myself.jpg')}/>
      <title>{title}</title>
      <link rel="shortcut icon" type="image/png" href={imageUrl('favicon.png')}/>
      <link href="https://fonts.googleapis.com/css?family=Libre+Barcode+39+Extended|Monoton|Roboto:400,700,900" rel="stylesheet"/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js"/>
    </Head>

    <LanguagePicker/>

    {children}

    <Footer/>

    <style global jsx>{`
      html, body {
        margin: 0;
        padding: 0;
        background-color: #2d2d2d;
      }
    `}</style>
  </div>
)
