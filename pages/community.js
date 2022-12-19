import Head from 'next/head';
import Image from 'next/image';
import Container from '../components/ui/Container';
import Navbar from '../components/ui/Navbar';

import Footer from '../components/ui/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>The Entrepreneurial University - Community</title>
        <meta
          name='description'
          content="The Technical University of Munich (TUM) is one of Europe's leading universities. It focuses on the engineering sciences, natural sciences, life sciences, medicine, and social sciences."
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Navbar />
        <Container>
          <main className='h-[70vh]'>
            <h1 className='mt-40 text-3xl'>Community</h1>
          </main>
        </Container>
        <Footer />
      </main>
    </>
  );
}
