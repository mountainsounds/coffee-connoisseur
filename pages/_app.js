import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <footer>
        <p>© 2021 Zack</p>
      </footer>
    </>
  )
}

export default MyApp
