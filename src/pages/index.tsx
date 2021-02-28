import Head from 'next/head'
import {GetServerSideProps} from 'next'

import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/CountDown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from '../contexts/ChallengesContext'
import styles from '../styles/pages/Home.module.css'

/*  Primeira página que será carregada ao acessar o site  */
interface HomeProps {
  level: number,
  currentExp: number,
  challengesCompleted: number
}


export default function Home(props: HomeProps) {

  return (
    <ChallengesProvider level={props.level} currentExp={props.currentExp} challengesCompleted={props.challengesCompleted}>
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
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {level, currentExp, challengesCompleted} = ctx.req.cookies


  return {
    props: {
      level: Number(level),
      currentExp: Number(currentExp),
      challengesCompleted: Number(challengesCompleted)
    }
  }
} 

