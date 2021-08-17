import '../styles/aos.min.css';
import '../styles/swiper.css';
import '../styles/styles.css';


import Layout from '../components/layout';
import React, { useEffect } from "react";
import AOS from 'aos';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return  (<Layout>
    <Component {...pageProps} />
  </Layout>)
}

export default MyApp
