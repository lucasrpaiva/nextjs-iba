
export default function SectionCarousel() {
    return ( <section id="header">
<div id="introCarousel" className="carousel slide carousel-fade shadow-2-strong" data-mdb-ride="carousel">

  <ol className="carousel-indicators">
    <li data-mdb-target="#introCarousel" data-mdb-slide-to="0" className="active"></li>
    <li data-mdb-target="#introCarousel" data-mdb-slide-to="1"></li>
    <li data-mdb-target="#introCarousel" data-mdb-slide-to="2"></li>
  </ol>


  <div className="carousel-inner">

    <div className="carousel-item active">
      <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white text-center">
            <h1 className="mb-3">ZMI inscrições abertas</h1>
            <h5 className="mb-4">Retomando a sua família!!</h5>
            
            <a className="btn btn-outline-light btn-lg m-2" href="https://www.youtube.com/watch?v=c9B4TPnak1A"
              role="button" >Saiba mais!!</a>
            <a className="btn btn-outline-light btn-lg m-2" href="https://mdbootstrap.com/docs/standard/"
               role="button" >inscreva-se</a>
          </div>
        </div>
      </div>
    </div>


    <div className="carousel-item">
      <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white text-center">
            <h2>Culto da família</h2>
          </div>
        </div>
      </div>
    </div>

    <div className="carousel-item">
      <div className="mask" style={{background: 'linear-gradient( 45deg, rgba(29, 236, 197, 0.7), rgba(91, 14, 214, 0.7) 100%)'}}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white text-center">
            <h2>Tribo!! Encontro juniores</h2>
            <a className="btn btn-outline-light btn-lg m-2"
              href="https://mdbootstrap.com/docs/standard/content-styles/masks/" role="button">Learn
              about masks</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <a className="carousel-control-prev" href="#introCarousel" role="button" data-mdb-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#introCarousel" role="button" data-mdb-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

    
</section> )
}