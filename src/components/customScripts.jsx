import Script from 'next/script'

export default function CustomScripts() {
    return (
        <>
        <Script src="/src/lib/js/jquery-3.6.0.min"></Script>
        <Script src="/src/lib/js/bootstrap.min"></Script>
        <Script src="/src/lib/js/swiper.min"></Script>
        <Script src="/src/lib/js/aos"></Script>
        <Script src="/src/lib/js/script"></Script>
        </>
    )
}