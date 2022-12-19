import Image from 'next/image';
import Button from '../shared/Button';
import ground from '../../public/ground.jpg';
const GroundCard = () => {
  return (
    <div className='md:relative my-32 flex flex-col md:flex-row md:justify-end'>
      <div className='p-6 py-12  w-full md:w-[600px] h-auto order-2 md:absolute md:top-20 md:left-0 z-20 bg-[#EA7236] text-black'>
        <h1 className='text-3xl font-medium my-5'>"Here I have met a lot of people who are breaking new ground"</h1>
        <p>Philip Häusser, alumnus</p>
        <Button variant='primary' size='lg'>
          READ THE ALUMN STORY
        </Button>
      </div>
      <Image className='w-[750px] h-[450px] object-cover right-0 order-1' src={ground} alt='ground' />
    </div>
  );
};

export default GroundCard;
