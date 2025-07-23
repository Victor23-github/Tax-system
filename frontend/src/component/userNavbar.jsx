import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const UserNavbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    // Clear any stored user data/tokens
    localStorage.removeItem('userToken');
    // Navigate to home page
    navigate('/');
  };

  return (
    <div className='flex'>
      {/* Sidebar for Desktop */}
      <nav className='hidden md:flex flex-col bg-green-900 text-white w-full h-screen p-4'>
        <div className='mb-8'>
          <Link to='/dashboard' className='text-2xl font-bold'>
            TaxPayer Portal
          </Link>
        </div>
        <div className='flex flex-col space-y-4'>
          <Link
            to='/dashboard'
            className='px-3 py-2 rounded-md text-sm font-medium hover:bg-green-800'
          >
            Dashboard
          </Link>
          <Link
            to='/dashboard/tax-records'
            className='px-3 py-2 rounded-md text-sm font-medium hover:bg-green-800'
          >
            Tax Records
          </Link>
          <button
            onClick={handleLogout}
            className='px-3 py-2 rounded-md text-sm font-medium bg-red-600 hover:bg-red-700'
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav className='md:hidden bg-green-800 text-white w-full'>
        <div className='flex items-center justify-between p-4'>
          <Link to='/dashboard' className='text-xl font-bold'>
            TaxPayer Portal
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='inline-flex items-center justify-center p-2 rounded-md hover:bg-green-700 focus:outline-none'
          >
            <span className='sr-only'>Open main menu</span>
            {/* Hamburger Icon */}
            <svg
              className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
            {/* Close Icon */}
            <svg
              className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <Link
              to='/dashboard'
              className='block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700'
            >
              Dashboard
            </Link>
            <Link
              to='/dashboard/tax-records'
              className='block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700'
            >
              Tax Records
            </Link>
            <button
              onClick={handleLogout}
              className='w-full text-left px-3 py-2 rounded-md text-base font-medium bg-red-600 hover:bg-red-700'
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default UserNavbar;
