import Head from 'next/head';
import SampleComponent from '../src/components/SampleComponent';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tajana Landing Page</title>
        <meta name="description" content="Welcome to Tajana Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1>Welcome to Tajana Landing Page</h1>
        <SampleComponent
          title="Sample Component"
          description="This is a sample component to demonstrate the project structure. You can replace this with your own content."
        />
      </main>
    </>
  );
}
