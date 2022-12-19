import Image from 'next/image';
import Container from '../ui/Container';
import { schools, Links } from '../data/content';
import upperArrow from '../../public/upperArrow.svg';
import straitArrow from '../../public/straitArrow.svg';
import TUM from '../../public/TUM.svg';
import partners from '../../public/partners.svg';
import facebook from '../../public/facebook.svg';
import youtube from '../../public/youtube.svg';
import twitter from '../../public/twitter.svg';
import instagram from '../../public/instagram.svg';
import linkedin from '../../public/linkedin.svg';
import rss from '../../public/rss.svg';

const Footer = () => {
  return (
    <div className='text-sm mt-16'>
      <div className='bg-[#0A2D57] text-white '>
        <Container>
          <div className='px-6  xl:px-0 xl:mx-auto xl:max-w-[90rem] flex flex-col xl:flex xl:flex-row xl:justify-between  py-[56px]  border-b border-[#9ABCE4]'>
            <div className='flex items-start gap-5 text'>
              <Image src={TUM} alt='logo' />
              <div className='flex flex-col gap-5'>
                <p>
                  Technical University of Munich <br /> ArcisstraBe 21 <br /> 80333 Munchen
                </p>
                <p>
                  Phone: <span> +49 (0)89-289-01</span> <br />
                  Fax: +49 (0)89-289-22000
                </p>
              </div>
            </div>
            <div className='text-base'>
              <p className='font-bold '>Let{"'"}s shape the future together</p>
              <div className='flex gap-3'>
                <p>Support us </p>
                <Image src={upperArrow} alt='' />
              </div>
            </div>

            <div className='flex flex-col gap-3 text-base'>
              <p className='font-bold'>Latest news</p>
              <p className='flex gap-3 items-center'>
                <Image src={straitArrow} alt='' />
                Germany{"'"}s strongest university in business sciences
              </p>
              <p className='flex gap-3 items-center'>
                <Image src={straitArrow} alt='' /> TUM partners with Nobel Sustainability Trust
              </p>
              <p className='flex gap-3 items-center'>
                <Image src={straitArrow} alt='' />
                Antihelium nuclei as messengers from the depths of the galaxy
              </p>
            </div>
          </div>
        </Container>
        <Container>
          <div className='py-[27px]'>
            <div className='px-6 xl:px-0 xl:mx-auto xl:max-w-[90rem] flex flex-col text-white xl:flex xl:flex-row r gap-4 xl:gap-10 '>
              <h1 className='font-bold'>
                Schools and <br /> Departments:
              </h1>
              <div className='flex w-full flex-wrap gap-4'>
                {schools.map((school, index) => {
                  return (
                    <p key={index} className='hover:underline hover:cursor-pointer flex gap-1 items-end'>
                      {school.name}
                      <Image src={upperArrow} alt='' />
                    </p>
                  );
                })}
              </div>
            </div>
            <div className='px-6 xl:px-0 xl:mx-auto xl:max-w-[90rem] flex flex-col text-white xl:flex xl:flex-row r gap-4 xl:gap-16 mt-[26px]'>
              <h1 className='font-bold'>Quicklinks:</h1>
              <div className='flex w-full flex-wrap gap-4'>
                {Links.map((link, index) => {
                  return (
                    <p key={index} className='flex hover:underline hover:cursor-pointer gap-1 items-end'>
                      {link.link}
                      <Image src={upperArrow} alt='' />
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className='bg-[#072140] text-[0.8rem] text-white py-[26px]'>
        <Container>
          <div className='px-6 xl:px-0 xl:max-w-[90rem] xl:mx-auto'>
            <div className='xl:flex xl:flex-row  xl:justify-between flex flex-col-reverse gap-6 xl:gap-0 w-full'>
              <ul className='flex  gap-4 xl:gap-6 flex-wrap'>
                <li className='hover:underline hover:cursor-pointer'>Jobs</li>
                <li className='hover:underline hover:cursor-pointer'>Feedback</li>
                <li className='hover:underline hover:cursor-pointer'>Press and Media</li>
                <li className='hover:underline hover:cursor-pointer'>Accessibility</li>
                <li className='hover:underline hover:cursor-pointer'>Privacy Policy</li>
                <li className='hover:underline hover:cursor-pointer'>Legal Notice</li>
              </ul>
              <div className='flex gap-6'>
                <Image src={facebook} alt='facebook' width={19} className='hover:underline hover:cursor-pointer' />
                <Image src={youtube} alt='youtube' width={19} className='hover:underline hover:cursor-pointer' />
                <Image src={twitter} alt='twitter' width={19} className='hover:underline hover:cursor-pointer' />
                <Image src={instagram} alt='instagram' width={19} className='hover:underline hover:cursor-pointer' />
                <Image src={linkedin} alt='linkedin' width={19} className='hover:underline hover:cursor-pointer' />
                <Image src={rss} alt='rss' width={19} className='hover:underline hover:cursor-pointer' />
              </div>
            </div>

            <div className='flex hover:underline hover:cursor-pointer gap-8 pt-[27px]'>
              <Image src={partners} alt='partners' width={32} height={59.51} />
              <div className='flex flex-col gap-4'>
                <p>TUM Partners of Excellence</p>
                <p>
                  Airbus · Altana · Audi · Bayerischer Bauindustrieverband · BMW · Bosch · Busch Vacuum · Clariant ·
                  Dräxlmaier · Evonik Industries · Google · Herrenknecht · HUAWEI · Infineon · Linde · MAN · Nestlé ·
                  Rohde & Schwarz · RWE · SAP · SGL Carbon · Siemens · TRUMPF · TÜV-Süd · Vereinigung der Bayerischen
                  Wirtschaft · Volkswagen · Wacker Chemie
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
