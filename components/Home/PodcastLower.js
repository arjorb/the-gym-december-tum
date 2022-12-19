import Container from '../ui/Container';
import PodcastCard from '../shared/PodcastCard';
import lower1 from '../../public/lower-1.jpg';
import lower2 from '../../public/lower-2.jpg';
import lower3 from '../../public/lower-3.jpg';

const PodcastLower = () => {
  return (
    <div className='my-32'>
      <Container>
        <div className='grid grid-cols-3 gap-10'>
          <div className=''>
            <PodcastCard
              image={lower1}
              title='Stay connected'
              content='Benefit from our worldwide network, make contacts and stay connected with your Alma Mater!'
              button='Join the TUM Community'
              variant='secondary'
              size='lg'
            />
          </div>
          <div>
            <PodcastCard
              image={lower2}
              title='TUMint Relocation Service'
              content='All-inclusive onboarding package for international students assists with accommodation and much more.'
              button='See our services'
              variant='secondary'
              size='xl'
            />
          </div>
          <div>
            <PodcastCard
              image={lower3}
              title='Discover the TUMshop'
              content='Merchandising items, conference materials and other products in the corporate design can be found online and on site.'
              button='Shop Online'
              variant='secondary'
              size='xl'
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PodcastLower;
