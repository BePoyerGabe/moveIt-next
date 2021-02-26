import Head from 'next/head'
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/CountDown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

import { CountdownProvider } from '../contexts/CountdownContext'
import styles from '../styles/pages/Home.module.css'

/*  Primeira página que será carregada ao acessar o site  */

export default function Home() {
  return (
    <div className={ styles.container }>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
      <section>
        <div >
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
          <ChallengeBox />


        <div>

        </div>
      </section>
      </CountdownProvider>
    </div>
  );
}

