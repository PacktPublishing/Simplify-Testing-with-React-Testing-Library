import 'tailwindcss/tailwind.css'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
      <style global jsx>{`
        body {
          background: rgba(243, 244, 246);
        }
      `}</style>
    </div>
  )
}

export default MyApp
