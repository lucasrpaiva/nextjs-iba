import Image from "next/image";
import Script from 'next/script';

function topFunction(e) {
    document.body.scrollTop = 0; // for Safari
    document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera

}

export default function Footer() {
    return (<>
        <div className="bottom py-2 text-light" >
            <div className="container d-flex justify-content-between">
                <div>
                    <p>Copyright © Igreja Batista Ágape - São João da Boa Vista</p><br />
                    <p>Distributed by: <a href="https://themewagon.com/">ChordSite</a></p>
                </div>
                <div>
                    <i className="fab fa-cc-visa fa-lg p-1"></i>
                    <i className="fab fa-cc-mastercard fa-lg p-1"></i>
                    <i className="fab fa-cc-paypal fa-lg p-1"></i>
                    <i className="fab fa-cc-amazon-pay fa-lg p-1"></i>
                </div>
            </div>
        </div>
        <button onClick={topFunction} id="myBtn">
            <Image src="/images/up-arrow.png" width={40} height={40} alt="alternative" />
        </button>  

        <Script type="text/javascript" src="https://mdbootstrap.com/api/snippets/static/download/MDB5-Free_3.8.1/js/mdb.min.js"/>
	    <Script src="/js/swiper.min.js"></Script>
        <Script src="/js/script.js"></Script>
    </>)
}