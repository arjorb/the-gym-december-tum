import Container from '../ui/Container';
import NewsCard from '../shared/NewsCard';
import ranking from '../../public/ranking.jpg';
import research from '../../public/research.jpg';

const NewsLower = () => {
  return (
    <Container>
      <div className='my-10 grid grid-cols-4 gap-5'>
        <div className=''></div>
        <NewsCard
          className='col-start-3'
          image={research}
          span='Research'
          category='Search for dark matter'
          title='Antihelium nuclei as messengers from the depths of the galaxy'
          content='How are galaxies born, and what holds them together? Astronomers assume that dark matter plays an essential role. However,...'
          date='12/13/2022'
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
  );
};

export default NewsLower;
