import Image from "next/image"

export default function About() {
    return (<section className="about d-flex align-items-center text-light py-5" id="about">
        <div className="container" >
            <div className="row d-flex align-items-center">
                <div className="col-lg-7" data-aos="fade-right">
                    <h5>Sobre nós</h5>
                    <p>Uma igreja que nasceu no coração de Deus, pra abençoar São João da Boa Vista, São Paulo, Brasil e o Mundo.</p>
                    <p className="py-2 para-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed accusantium aut dolores inventore architecto modi cupiditate eligendi corporis, illum illo culpa. Reiciendis, molestias. Illum voluptatum quisquam ad veritatis dolorem.</p>
                    <p className="py-2 para-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed accusantium aut dolores inventore architecto modi cupiditate eligendi corporis, illum illo culpa. Reiciendis, molestias. Illum voluptatum quisquam ad veritatis dolorem.</p>

                    <div className="my-3">
                        <a className="btn" href="#your-link">Learn More</a>
                    </div>
                </div>
                <div className="col-lg-5 text-center py-4 py-sm-0" data-aos="fade-down">
                    <Image className="img-fluid rounded-circle" src="/images/logo_iba5.png" width={100} height={100} alt="about" />
                </div>
            </div>
        </div>
    </section>)
}