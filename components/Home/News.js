import Container from '../ui/Container';
import NewsCard from '../shared/NewsCard';
import Button from '../shared/Button';
const News = () => {
  return (
    <>
      <Container>
        <div className='my-20 grid grid-cols-4 gap-5'>
          <div className='col-span-2 text-[#072140]'>
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
          <NewsCard />
          <NewsCard />
        </div>
      </Container>
    </>
  );
};

export default News;
