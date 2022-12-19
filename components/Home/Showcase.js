import hero from '../../public/ezgif.gif';
import Image from 'next/image';
import Container from '../ui/Container';
const Showcase = () => {
  return (
    <div className='relative mt-20'>
      <div className='h-[350px] md:h-0 bg-gradient-to-r from-[#072140] via-[#0A2D57] to-[#165DB1]'></div>
      <Image src={hero} className=' w-full md:h-[700px]' alt='cover' />
      <Container>
        <div className='absolute  text-white top-20'>
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
