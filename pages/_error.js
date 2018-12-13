import React from 'react'
import Layout from '../components/Layout'
import style from '../style/style'
import appUrl from '../util/appUrl'
import imageUrl from '../util/imageUrl'

export default class extends React.Component {
  static getInitialProps({ req, res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    const url = req ? appUrl(req.originalUrl) : window.location.href
    return { statusCode: 500, url }
  }

  render() {
    const { statusCode, url } = this.props
    return (
      <div>
        <Layout title="bibytejoy - 404" openGraphUrl={url}>
          <div className="hero">
            <div className="hero-content"/>
          </div>
          <div className="root">
            <div className="content">
              <p>
                {'$ curl -I ' + url}<br/><br/>
                {statusCode === 404
                  ? (
                    <span>
                      {'HTTP/1.1 404 Not Found'}<br/>
                      {'Server: nginx/1.12.1'}<br/>
                      {'Date: ' + new Date().toGMTString()}<br/>
                      {'Content-Type: text/html; charset=utf-8'}<br/>
                      {'Content-Length: 1337'}<br/>
                      {'Connection: keep-alive'}<br/>
                      {'X-Powered-By: Next.js 7.0.2'}<br/>
                      {'ETag: "539-hrQGZbLW/arFA/9N8+OwW4YT9JA"'}
                    </span>
                  ) : 'HTTP/1.1 ' + statusCode
                }
                <br/><br/>
                {'$ _'}
              </p>
            </div>
          </div>
        </Layout>

        <style jsx>{`
          .hero {
            ${style.layer.hero404.root}
          }

          .hero-content {
            ${style.layer.hero404.content}
          }

          .root {
            ${style.layer.section.blackFullWidth}
          }

          .content {
            position: relative;
            margin: auto;
            width: calc(100vw - 2 * ${style.padding.normal});
            height: calc(100vw - 2 * ${style.padding.normal});
            max-width: 550px;
            max-height: 550px;
            background-image: url(${imageUrl('terminal.svg')});
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
          }

          p {
            ${style.text.pBold}
            position: absolute;
            top: 15%;
            left: 5%;
            width: 95%;
            overflow-x: hidden;
            white-space: nowrap;
          }
        `}</style>
      </div>
    )
  }
}
