import Document, { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/header";
import About from "../components/sectionAbout"
import SectionCarousel from "../components/sectionCarousel";
import SectionFooter from "../components/sectionFooter"

class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <Header/>
        </Head>
        <body>      
        <SectionCarousel />        
        <About />
        <SectionFooter />
        <NextScript />
        <Main />
        </body>
      </Html>
    );
  }
}

export default MyDocument;