import Container from '../ui/Container';
import NewsCard from '../shared/NewsCard';
import Button from '../shared/Button';
import ranking from '../../public/ranking.jpg';
import research from '../../public/research.jpg';
const News = () => {
  return (
    <>
      <Container>
        <div className='my-20 grid md:grid-cols-4 gap-5'>
          <div className='md:col-span-2 text-[#072140]'>
            <h1 className='text-3xl font-semibold '>News from TUM</h1>
            <p className='text-[1.3rem] mt-7'>
              News, research results and events: everything that enthuses people at our university.
            </p>
            <div className='text-lg cursor-pointer'>
              <Button variant='primary' size='sm'>
                See All
              </Button>
            </div>
          </div>
          <NewsCard
            image={ranking}
            span='TUM in ranking'
            category='WirtschaftsWoche rankings'
            title='Germanys strongest university in business sciences'
            content='TUM has retained its ranking as Germanys strongest research university in business sciences. The latest issue
            of the...'
            date='12/16/2022'
            time='Reading time 2 min'
          />
          <NewsCard
            image={research}
            span='Research'
            category='Search for dark matter'
            title='Antihelium nuclei as messengers from the depths of the galaxy'
            content='How are galaxies born, and what holds them together? Astronomers assume that dark matter plays an essential role. However,...'
            date='12/13/2022'
            time='Reading time 2 min'
          />
        </div>
      </Container>
    </>
  );
};

export default News;
