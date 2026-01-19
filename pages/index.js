import Head from 'next/head';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Experience from '../src/components/Experience';
import Projects from '../src/components/Projects';
import Vision from '../src/components/Vision';
import Contact from '../src/components/Contact';
import DarkModeToggle from '../src/components/DarkModeToggle';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tajana Škorak | Key Account Manager | AI & Digital Skills</title>
        <meta
          name="description"
          content="Key Account Manager with experience in HoReCa sector, specializing in AI, web development, and digital products. Building solutions that connect people, data, and business goals."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Key Account Manager, AI, Digital Skills, HoReCa, Next.js, Web Development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DarkModeToggle />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Vision />
        <Contact />
      </main>
    </>
  );
}
