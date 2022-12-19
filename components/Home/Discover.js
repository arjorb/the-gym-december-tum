import Button from '../shared/Button';
import Container from '../ui/Container';
import Image from 'next/image';
import discover from '../../public/discover.jpg';
const Discover = () => {
  return (
    <div className='mt-20'>
      <Container>
        <div className=''>
          <h2 className='font-semibold '>Customized navigation</h2>
          <h1 className='text-4xl font-semibold my-7'>Discover what TUM has to offer</h1>
        </div>
        <div className='flex justify-end items-center gap-20'>
          <div className='relative'>
            <div className='absolute -left-40 top-10 w-64 h-72 px-2 py-4  bg-white border-slate-400 border'>
              <p className='px-4'>For:</p>
              <ul className='mt-5 space-y-1'>
                <li className='bg-slate-100 px-4 py-3 cursor-pointer font-medium'>Prospective Students</li>
                <li className='hover:bg-slate-100 px-4 py-3 cursor-pointer font-medium text-[#14519A]'>Founders</li>
                <li className='hover:bg-slate-100 px-4 py-3 cursor-pointer font-medium text-[#14519A]'>Employees</li>
                <hr />
                <li className='hover:bg-slate-100 px-4 py-3 cursor-pointer font-medium text-[#14519A]'>Show all</li>
              </ul>
            </div>
            <div className='w-[600px] h-[400px] bg-yellow-300 flex justify-center items-center'>
              <div className='relative'>
                <Image src={discover} className=' w-96' alt='' />
                <div className='absolute bottom-0 left-0 h-[80%] w-[40px] bg-yellow-300'></div>
                <div className='absolute bottom-0 left-20 h-[80%] w-[40px] bg-yellow-300'></div>
                <div className='absolute top-0 left-40 h-[80%] w-[40px] bg-yellow-300'></div>
                <div className='absolute bottom-0 left-60 h-[80%] w-[40px] bg-yellow-300'></div>
                <div className='absolute bottom-0 left-80 h-[80%] w-[40px] bg-yellow-300'></div>
              </div>
            </div>
          </div>
          <div className='w-[400px]'>
            <h1 className='text-4xl font-semibold my-7'>Prospective Students</h1>
            <p className='text-xl'>
              Learn to bring ideas to life, discover new possibilities, work in teams and build networks.
            </p>
            <Button variant='secondary' size='sm'>
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Discover;
