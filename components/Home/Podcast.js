import Container from '../ui/Container';
import PodcastCard from '../shared/PodcastCard';
import podcast1 from '../../public/podcast-1.jpg';
import podcast2 from '../../public/podcast-2.jpg';

const Podcast = () => {
  return (
    <div className='my-32'>
      <Container>
        <div className='grid md:grid-cols-3 gap-10'>
          <div className='col-span-2'>
            <PodcastCard
              image={podcast1}
              title='We are TUM – the podcast of our university'
              content='In our podcast series, we regularly talk to the people who make up our university: From top researchers, students and faculty to the "hidden champions" behind the scenes.'
              button='All episodes'
              variant='primary'
              size='md'
            />
          </div>
          <div>
            <PodcastCard
              image={podcast2}
              title='Lifelong learning'
              content='We offer continuing education opportunities accompanying you over your whole career.'
              button='TUM Institute for LifeLong Learning'
              variant='secondary'
              size='xl'
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Podcast;
