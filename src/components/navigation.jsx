import Link from "next/link"
import Image from "next/image"


export default function Navigation() {
    return (<nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-dark" aria-label="Main navigation">
        <div className="container">

            <Link href="/">
                <a>
                    <Image className="rounded-circle" src="/images/logo_iba5.png" width={100} height={100} alt="alternative" />
                </a>
            </Link>


            <Link href="/">
                <a className="text-center nav-link active"><h5>Igreja Batista Ágape</h5><p>São João da Boa Vista - SP</p></a>
            </Link>

            <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault" >
                <ul className="navbar-nav ms-auto navbar-nav-scroll">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#header">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">Sobre nós</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#services">Ministérios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#plans">Eventos</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false" href="#">A igreja</a>

                        <ul className="dropdown-menu" aria-labelledby="dropdown01">
                            <li><a className="dropdown-item" href="article.html">Ore por mim</a></li>
                            <li><div className="dropdown-divider"></div></li>
                            <li><a className="dropdown-item" href="terms.html">Programação</a></li>
                            <li><div className="dropdown-divider"></div></li>
                            <li><a className="dropdown-item" href="privacy.html">Doações</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contato</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#location">Localização</a>
                    </li>
                </ul>
                <span className="nav-item social-icons">
                    <span className="fa-stack">
                        <a className="neon1" href="https://www.youtube.com/c/ibasjbv/" rel="noreferrer" target="_blank">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-youtube fa-stack-1x"></i>
                        </a>
                        <p className="centered">ao&nbsp;vivo</p>
                    </span>
                    <span className="fa-stack">
                        <a href="https://pt-br.facebook.com/ibasjbv/" rel="noreferrer" target="_blank">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-facebook-f fa-stack-1x"></i>
                        </a>
                    </span>
                    <span className="fa-stack">
                        <a href="https://www.instagram.com/ibasjbv_/" rel="noreferrer" target="_blank">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-twitter fa-stack-1x"></i>
                        </a>
                    </span>

                </span>
            </div>
        </div>
    </nav>)
}