import Container from './Container';
import Image from 'next/image';
import menu from '../../public/menu.svg';
import TUM from '../../public/TUM.svg';
import search from '../../public/search.svg';
const Navbar = () => {
  return (
    <div className='bg-[#072140] py-5'>
      <Container>
        <div className='flex justify-between items-center text-white'>
          <div className='flex gap-4'>
            <Image src={menu} alt='menu' />
            <div className='flex gap-3'>
              <Image src={TUM} alt='TUM' />
              <span className='text-[0.8rem] leading-tight'>
                Technical <br /> University <br /> of Munich
              </span>
            </div>
          </div>
          <div className='flex gap-3 items-center text-sm  font-medium'>
            <ul className='flex gap-5  mr-12'>
              <li>NEWS AND EVENTS</li>
              <li>STUDIES</li>
              <li>LIFELONG LEARNING</li>
              <li>RESEARCH</li>
              <li>INNOVATION</li>
              <li>COMMUNITY</li>
              <li>ABOUT TUM</li>
            </ul>
            {/* Languages  */}
            <div className='flex gap-2 '>
              <p className='border-r-2 border-white px-2 text-slate-300'>DE</p>
              <p>ENG</p>
            </div>
            <Image src={search} alt='search' />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
