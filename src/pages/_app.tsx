import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengesContext'
/* Reaproveitamento do que se mantém no site é mantido nesse _app.js */

function MyApp({ Component, pageProps }) {
  return (
      <ChallengesProvider>
        <Component {...pageProps} />
      </ChallengesProvider>
  )
}

export default MyApp;
