import '../styles/bootstrap.min.css';
import '../styles/aos.min.css';
import '../styles/swiper.css';
import '../styles/styles.css';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return  (<Layout>
    <Component {...pageProps} />
  </Layout>)
}

export default MyApp
