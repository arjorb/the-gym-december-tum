import Container from '../ui/Container';

const Numbers = () => {
  return (
    <div className='mt-24'>
      <Container>
        <h1 className='text-4xl font-semibold my-10'>TUM in numbers</h1>
        <div className='grid grid-cols-3 gap-5 '>
          <div className='w-full h-auto bg-blue-500 text-white px-5 py-10 col-span-2 row-span-2'>
            <h1 className='text-7xl font-semibold'>50,000</h1>
            <p className='text-3xl font-semibold mt-3'>Students</p>
          </div>

          <div className='w-full  bg-[#F7B11E] text-black px-5 py-5 flex items-center gap-10'>
            <h1 className='text-7xl font-semibold'>176</h1>
            <p className='text-2xl font-semibold mt-3'>
              ERC Grants for <br /> cutting-edge <br /> research
            </p>
          </div>

          <div className='w-full  bg-[#B55CA5] text-black px-5 py-5 flex gap-10'>
            <h1 className='text-7xl font-semibold'>18</h1>
            <p className='text-2xl font-semibold mt-3 justify-bottom'>Nobel laureates</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Numbers;
