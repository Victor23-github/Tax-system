import { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='bg-blue-700 text-white px-4 py-3 flex items-center justify-between'>
      <div className='text-xl font-bold'>
        <Link to='/'>TaxSystem</Link>
      </div>
      <button
        className='md:hidden focus:outline-none'
        onClick={() => setOpen(!open)}
        aria-label='Toggle menu'
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          {open ? (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          ) : (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          )}
        </svg>
      </button>
      <div
        className={`absolute top-16 left-0 w-full bg-blue-700 md:static md:w-auto md:flex ${
          open ? 'block' : 'hidden'
        }`}
      >
        <ul className='flex flex-col md:flex-row md:items-center md:gap-6'>
          <li>
            <Link
              to='/'
              className='block px-4 py-2 hover:bg-blue-800'
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/login'
              className='block px-4 py-2 hover:bg-blue-800'
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to='/signup'
              className='block px-4 py-2 hover:bg-blue-800'
              onClick={() => setOpen(false)}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
