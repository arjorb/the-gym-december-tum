import Head from 'next/head';
import Image from 'next/image';
import Showcase from '../components/Home/Showcase';
import Navbar from '../components/ui/Navbar';
import News from '../components/Home/News';
import NewsLower from '../components/Home/NewsLower';
import Discover from '../components/Home/Discover';
import Degree from '../components/Home/Degree';
import Drive from '../components/Home/Drive';
import Numbers from '../components/Home/Numbers';
import School from '../components/Home/School';
import Ground from '../components/Home/Ground';
import Podcast from '../components/Home/Podcast';
import PodcastLower from '../components/Home/PodcastLower';
import Giving from '../components/Home/Giving';

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
        <Navbar />
        <Showcase />
        <News />
        <NewsLower />
        <Discover />
        <Degree />
        <Drive />
        <Numbers />
        <School />
        <Ground />
        <Podcast />
        <PodcastLower />
        <Giving />
      </main>
    </>
  );
}
