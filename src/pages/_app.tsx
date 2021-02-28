import '../styles/global.css'



/* Reaproveitamento do que se mantém no app inteiro é mantido nesse _app.js */

function MyApp({ Component, pageProps }) {
  return (
          <Component {...pageProps} />
  )
}

export default MyApp;
