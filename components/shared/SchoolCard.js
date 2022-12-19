import Image from 'next/image';
import Button from '../shared/Button';
import school from '../../public/school.jpg';
const SchoolCard = () => {
  return (
    <div className='relative'>
      <Image className='w-[750px] h-[500px] object-cover' src={school} alt='drive' />
      <div className='p-6 py-12 absolute top-16 right-5 w-[600px] h-auto bg-[#8F81EA] text-black'>
        <h1 className='text-4xl my-5'>Schools and Research Centers</h1>
        <p>
          They form the academic foundation of TUM: Our schools and departments, connected at disciplinary interfaces by
          integrative research institutes to create an organization that drives innovation.
        </p>
        <Button variant='primary' size='md'>
          ORGANISATION
        </Button>
      </div>
    </div>
  );
};

export default SchoolCard;
