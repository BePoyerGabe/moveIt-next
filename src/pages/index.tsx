import Head from 'next/head'
import { CompletedChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/CountDown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css'

/*  Primeira página que será carregada ao acessar o site  */

export default function Home() {
  return (
    <div className={ styles.container }>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar />

      <section>
        <div >
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>


        <div>

        </div>
      </section>
    </div>
  );
}

