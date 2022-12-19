import Image from 'next/image';
import ranking from '../../public/ranking.webp';
const NewsCard = () => {
  return (
    <div>
      <div className='relative'>
        <Image src={ranking} className='w-full' alt='' />
        <p className='absolute bottom-0 left-0 bg-slate-200 py-1 px-2 text-[0.8rem]'>TUM in ranking</p>
      </div>
      <div className='mt-3'>
        <h3 className='font-medium text-lg'>WirtschaftsWoche rankings</h3>
        <h2 className='font-bold text-xl my-2'>Germanys strongest university in business sciences</h2>
        <p className='text-sm'>
          TUM has retained its ranking as Germanys strongest research university in business sciences. The latest issue
          of the...
        </p>
      </div>
      <div className='flex justify-between mt-5 text-sm'>
        <p>12/16/2022</p>
        <p>Reading time 2 min</p>
      </div>
    </div>
  );
};

export default NewsCard;
