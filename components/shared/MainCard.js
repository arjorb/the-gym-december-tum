import Image from 'next/image';
import Button from '../shared/Button';
import drive from '../../public/drive.jpg';
const MainCard = () => {
  return (
    <div className='md:relative'>
      <Image className='md:h-[500px] object-cover' src={drive} alt='drive' />
      <div className='p-6 py-12 md:absolute md:top-16 md:right-5 w-full md:w-[600px] h-auto bg-[#3070B3] text-white'>
        <h1 className='text-4xl my-5'>What drives us: President Thomas F. Hofmann about TUM</h1>
        <p>
          Research and innovations for society, innovative teaching and continuing education: This is how we shape a
          sustainable future, relying on the intelligence of the entire university and working closely with global
          partners to do so.
        </p>
        <Button variant='primary' size='sm'>
          READ MORE
        </Button>
      </div>
    </div>
  );
};

export default MainCard;
