import Image from 'next/image';
import logo from '@/assets/images/logo-white.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-primary-600 py-4 mt-24 h-48 flex justify-center items-center'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-4'>
        <div className='mb-4 md:mb-0'>
          <Image src={logo} alt='Logo' className='h-32 w-auto' />
        </div>

        <div>
          <p className='text-sm text-gray-500 mt-2 md:mt-0'>
            &copy; {currentYear} vinnniiee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
