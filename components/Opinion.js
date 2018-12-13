import style from '../style/style'

const logoWidth = '93px'

export default ({ title, text, imageUrl }) => (
  <div className="opinion">
    <div className="content">
      <div className="img">
        <img src={imageUrl}/>
      </div>

      <div className="text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>

    <style jsx>{`
      .opinion {
        ${style.layer.card.white}
      }

      .content {
        display: flex;
      }

      .img {
        flex: 1 1 auto;
        width: ${logoWidth};
        height: ${logoWidth};
      }

      .text {
        flex: 1 1 auto;
        box-sizing: border-box;
        padding-left: ${style.padding.normal};
        width: calc(100% - ${logoWidth});
      }

      img {
        display: block;
        width: 100%;
        height: 100%;
      }

      h3 {
        ${style.text.h3Black}
      }

      p {
        ${style.text.p}
        padding-top: ${style.padding.tight};
      }
    `}</style>
  </div>
)
