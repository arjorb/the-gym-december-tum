import hero from '../../public/ezgif.gif';
import Image from 'next/image';
import Container from '../ui/Container';
const Showcase = () => {
  return (
    <div className='relative'>
      <Image src={hero} className=' w-full h-[700px]' alt='cover' />
      <Container>
        <div className='absolute text-white top-40'>
          <h1 className='text-5xl font-medium text-white'>
            TUM. The Entrepreneurial <br /> University
          </h1>
          <p className='text-lg mt-5'>Innovation through talent, excellence and responsibility</p>
        </div>
      </Container>
    </div>
  );
};

export default Showcase;
