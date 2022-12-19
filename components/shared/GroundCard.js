import Image from 'next/image';
import Button from '../shared/Button';
import ground from '../../public/ground.jpg';
const GroundCard = () => {
  return (
    <div className='relative my-32 flex justify-end'>
      <div className='p-6 py-12  w-[600px] h-auto absolute top-20 left-0 z-20 bg-[#EA7236] text-black'>
        <h1 className='text-3xl font-medium my-5'>"Here I have met a lot of people who are breaking new ground"</h1>
        <p>Philip Häusser, alumnus</p>
        <Button variant='primary' size='lg'>
          READ THE ALUMN STORY
        </Button>
      </div>
      <Image className='w-[750px] h-[450px] object-cover right-0' src={ground} alt='ground' />
    </div>
  );
};

export default GroundCard;
