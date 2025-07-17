import { useNavigate } from 'react-router';
import Navbar from '../component/navbar';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section className='flex flex-col items-center justify-center h-[93dvh] bg-gradient-to-r from-blue-100 to-green-100 p-10'>
        <div className='max-w-2xl text-center'>
          <h1 className='text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-lg'>
            Empower Your Future with Taxes
          </h1>
          <p className='text-lg text-gray-700 mb-8'>
            Join our platform to manage your taxes efficiently, stay informed,
            and contribute to a brighter tomorrow.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button
              className='bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition'
              onClick={() => navigate('/signup')}
            >
              Learn More
            </button>
            <button
              className='bg-green-600 text-white md:w-[130px] px-6 py-3 rounded-lg shadow hover:bg-green-700 transition'
              onClick={() => navigate('/login')}
            >
              Sign In
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
