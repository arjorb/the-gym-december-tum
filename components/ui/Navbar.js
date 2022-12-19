import Container from './Container';
import Image from 'next/image';
import Link from 'next/link';
import menu from '../../public/menu.svg';
import TUM from '../../public/TUM.svg';
import search from '../../public/search.svg';
import bars from '../../public/bars.svg';
const Navbar = () => {
  return (
    <div className='bg-[#072140] fixed top-0  left-0 right-0 z-50 py-5'>
      <Container>
        <div className='flex justify-between items-center text-white'>
          <div className='flex items-center gap-4'>
            <Image src={menu} alt='menu' />
            <div className='flex gap-3'>
              <Image src={TUM} alt='TUM' />
              <span className='hidden md:visible text-[0.7rem] opacity-90 leading-tight'>
                Technical <br /> University <br /> of Munich
              </span>
            </div>
          </div>
          <div className='flex gap-3 items-center text-sm opacity-90  font-medium'>
            <ul className='hidden md:flex gap-6  mr-12'>
              <li>
                <Link className='hover:border-b-4 py-7 hover:border-white' href=''>
                  NEWS AND EVENTS
                </Link>
              </li>
              <li>
                <Link className='hover:border-b-4 py-7 hover:border-white' href=''>
                  STUDIES
                </Link>
              </li>
              <li>
                <Link className='hover:border-b-4 py-7 hover:border-white' href=''>
                  LIFELONG LEARNING
                </Link>
              </li>
              <li>
                <Link className='hover:border-b-4 py-7 hover:border-white' href=''>
                  RESEARCH
                </Link>
              </li>
              <li>
                <Link className='hover:border-b-4 py-7 hover:border-white' href=''>
                  INNOVATION
                </Link>
              </li>
              <li>
                <Link className='hover:border-b-4 py-7 hover:border-white' href=''>
                  COMMUNITY
                </Link>
              </li>
              <li>
                <Link className='hover:border-b-4 py-7 hover:border-white' href=''>
                  ABOUT TUM
                </Link>
              </li>
            </ul>
            {/* Languages  */}
            <div className='flex gap-2 mr-3'>
              <p className='border-r-2 border-white px-2 text-slate-300'>DE</p>
              <p>ENG</p>
            </div>
            <Image src={search} alt='search' className='cursor-pointer' />
            <Image src={bars} alt='bars' className='cursor-pointer md:hidden' />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
