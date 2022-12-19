import Image from 'next/image';

const NewsCard = ({ image, span, category, title, content, date, time }) => {
  return (
    <div>
      <div className='relative'>
        <Image src={image} className='w-full' alt='' />
        <p className='absolute bottom-0 left-0 bg-slate-200 py-1 px-2 text-[0.8rem]'>{span}</p>
      </div>
      <div className='mt-3'>
        <h3 className='font-medium text-lg'>{category}</h3>
        <h2 className='font-bold text-xl my-2'>{title}</h2>
        <p className='text-sm'>{content}</p>
      </div>
      <div className='flex justify-between mt-5 text-sm'>
        <p>{date}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default NewsCard;
