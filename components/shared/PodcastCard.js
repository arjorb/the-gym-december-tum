import Image from 'next/image';
import Container from '../ui/Container';
import Button from './Button';

const PodcastCard = ({ image, title, content, button, size, variant }) => {
  return (
    <div>
      <Container>
        <Image src={image} className='w-full h-72 object-cover' alt='' />
        <div className='mt-3'>
          <h2 className='font-bold text-xl my-5'>{title}</h2>
          <p className='text'>{content}</p>
        </div>
        <Button variant={variant} size={size}>
          {button}
        </Button>
      </Container>
    </div>
  );
};

export default PodcastCard;
