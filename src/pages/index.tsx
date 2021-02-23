import Head from 'next/head'
import { CompletedChallenges } from '../components/CompleteChallenges';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css'

/*  Primeira página que será carregada ao acessar o site  */

export default function Home() {
  return (
    <div className={ styles.container }>
      <ExperienceBar />

      <section>
        <div >
          <Profile />
          <CompletedChallenges />
        </div>


        <div>

        </div>
      </section>
    </div>
  );
}

