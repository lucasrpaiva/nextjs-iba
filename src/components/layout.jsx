import Header from "./header";
import Navigation from "./navigation";
import Footer from "./footer";

export default function Layout({ children }) {
    return (<>
        <Header/>
        <Navigation/>
        <main>
            { children }
        </main>
        <Footer/>
    </>)
}