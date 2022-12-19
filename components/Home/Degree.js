import Container from '../ui/Container';
import arrow from '../../public/arrow.svg';
import Image from 'next/image';
const Degree = () => {
  return (
    <Container>
      <div className='my-16 w-full  '>
        <select
          className='w-full h-16 px-3 bg-slate-100 outline-none border-none cursor-pointer'
          placeholder='Select Degree Program'
          name=''
          id=''
        >
          <option value=''>Aerospaceship now</option>
          <option value=''>Aerospaceship now</option>
          <option value=''>Aerospaceship now</option>
          <option value=''>Aerospaceship now</option>
          <option value=''>Aerospaceship now</option>
        </select>

        <div className='flex justify-end mt-3 gap-2'>
          <p className='text-blue-500 cursor-pointer hover:underline'> Degree Program</p>
          <Image src={arrow} alt='arrow' />
        </div>
      </div>
    </Container>
  );
};

export default Degree;
