import Script from 'next/script';

export default function Header () {
    return (<>
        <title>Igreja Batista Ágape</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="Igreja Batista Ágape" />
        <meta name="author" content="Lucas Rodrigues Paiva" />

        <link rel="icon" href="/images/logo_iba.png"></link>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" />
        <link rel="stylesheet" href="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/css/mdb5/3.9.0/compiled.min.css" />
        
        <Script src="/js/jquery-3.6.0.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></Script>
        <Script src="/js/bootstrap.min.js"></Script>
     </>)

}