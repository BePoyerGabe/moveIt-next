import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengesContext'
import { CountdownProvider } from '../contexts/CountdownContext';
/* Reaproveitamento do que se mantém no site é mantido nesse _app.js */

function MyApp({ Component, pageProps }) {
  return (
      <ChallengesProvider>
        <CountdownProvider>
          <Component {...pageProps} />
        </CountdownProvider>
      </ChallengesProvider>
  )
}

export default MyApp;
