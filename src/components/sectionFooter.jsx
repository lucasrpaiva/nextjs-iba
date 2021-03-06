export default function SectionFooter() {
    return <section className="footer d-flex text-light">
        <div className="container">
            <div className="row" data-aos="fade-right">
                <div className="col-lg-3 py-4 py-md-5">
                    <div className="d-flex align-items-center">
                        <h4 className="">Igreja Batista Ágape</h4>
                    </div>
                    <p className="py-3 para-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi repudiandae explicabo esse maxime, impedit rem voluptatibus amet error quas.</p>
                    <div className="d-flex">
                        <div className="me-3">
                            <a href="#your-link">
                                <i className="fab fa-youtube fa-2x py-2"></i>
                            </a>
                        </div>
                        <div className="me-3">
                            <a href="#your-link">
                                <i className="fab fa-facebook fa-2x py-2"></i>
                            </a>
                        </div>
                        <div className="me-3">
                            <a href="https://www.instagram.com/ibasjbv_/">
                                <i className="fab fa-instagram fa-2x py-2"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 py-4 py-md-5">
                    <div>
                        <h4 className="py-2">Links rápidos</h4>
                        <div className="d-flex align-items-center py-2">
                            <i className="fas fa-caret-right"></i>
                            <a href="#about"><p className="ms-3">Sobre nós</p></a>
                        </div>
                        <div className="d-flex align-items-center py-2">
                            <i className="fas fa-caret-right"></i>
                            <a href="#"><p className="ms-3">Ministérios</p></a>
                        </div>
                        <div className="d-flex align-items-center py-2">
                            <i className="fas fa-caret-right"></i>
                            <a href="#"><p className="ms-3">Eventos</p></a>
                        </div>
                        <div className="d-flex align-items-center py-2">
                            <i className="fas fa-caret-right"></i>
                            <a href="#"><p className="ms-3">Contatos</p></a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 py-4 py-md-5">

                    <h4 className="py-2">Useful Links</h4>
                    <div className="d-flex align-items-center py-2">
                        <i className="fas fa-caret-right"></i>
                        <a href="privacy.html"><p className="ms-3">Privacy</p></a>

                    </div>
                    <div className="d-flex align-items-center py-2">
                        <i className="fas fa-caret-right"></i>
                        <a href="terms.html"><p className="ms-3">Terms</p></a>
                    </div>
                    <div className="d-flex align-items-center py-2">
                        <i className="fas fa-caret-right"></i>
                        <a href="#your-link"><p className="ms-3">Disclaimer</p></a>
                    </div>
                    <div className="d-flex align-items-center py-2">
                        <i className="fas fa-caret-right"></i>
                        <a href="#your-link"><p className="ms-3">FAQ</p></a>
                    </div>

                </div>

                <div className="col-lg-3 py-4 py-md-5">
                    <div className="d-flex align-items-center">
                        <h4>Newsletter</h4>
                    </div>
                    <p className="py-3 para-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, ab.</p>
                    <div className="d-flex align-items-center">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control p-2" placeholder="Enter Email" aria-label="Recipient's email"/>
                            <button className="btn-secondary text-light"><i className="fas fa-envelope fa-lg"></i></button>       
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </section> 
}