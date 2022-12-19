import Container from '../ui/Container';
import Button from '../shared/Button';

const Giving = () => {
  return (
    <div>
      <Container>
        <div className='bg-[#EFEDFC] flex flex-col justify-center items-center py-16 my-10 space-y-5'>
          <h1 className='text-3xl font-semibold'>Giving</h1>
          <p>
            Support research, innovation and teaching at one of the best technical universities in Europe. Show social
            responsibility and help nurture talent.
          </p>
          <Button variant='primary' size='md'>
            SUPPORT US
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Giving;
