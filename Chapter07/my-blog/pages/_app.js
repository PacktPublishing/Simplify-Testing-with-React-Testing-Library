import 'tailwindcss/tailwind.css'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
      <Footer />
      <style global jsx>{`
        body {
          background: rgba(243, 244, 246);
        }
      `}</style>
    </div>
  )
}

export default MyApp
