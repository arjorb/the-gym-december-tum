import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>The Entrepreneurial University - TUM</title>
        <meta
          name='description'
          content="The Technical University of Munich (TUM) is one of Europe's leading universities. It focuses on the engineering sciences, natural sciences, life sciences, medicine, and social sciences."
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className='text-3xl text-[#095c6f] font-bold underline'>Setting Environment</div>
      </main>
    </>
  );
}
