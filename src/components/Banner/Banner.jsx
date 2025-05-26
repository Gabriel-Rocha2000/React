import './Banner.css'

function Banner(Props) {
  return (
    <div className='banner  d-flex al-end' style={{backgroundImage: `url(/${Props.image})`}}>
        <div className='container'>
            <div className='title-panel d-flex al-center jc-center'>
            <h1>{Props.title}</h1>
            </div>
        </div>
    </div>
  )
}

export default Banner