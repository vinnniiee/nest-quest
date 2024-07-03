import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <section className='bg-blue-50 min-h-screen flex-grow'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <div className='flex justify-center'>
            <FaExclamationTriangle className='fas fa-exclamation-triangle fa-5x text-8xl text-secondary-700'></FaExclamationTriangle>
          </div>
          <div className='text-center'>
            <h1 className='text-6xl font-semibold mt-4 mb-2'>Page Not Found</h1>
            <p className='text-gray-500 text-xl mb-10'>
              The page you are looking for does not exist.
            </p>
            <Link
              href='/'
              className='bg-secondary-700 hover:bg-secondary-800 text-white font-bold py-4 px-6 rounded'
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
      <div className='flex-grow'></div>
    </section>
  );
};
export default NotFoundPage;
