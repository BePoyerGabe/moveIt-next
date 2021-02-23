import Head from 'next/head'
import { ExperienceBar } from "../components/ExperienceBar";

/*  Primeira página que será carregada ao acessar o site  */

export default function Home() {
  return (
    <div className="container">
      <ExperienceBar />
    </div>
  );
}

