import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-green-100 to-blue-200'>
    <div className='bg-white rounded-3xl shadow-2xl p-10 border border-blue-100 max-w-lg w-full text-center'>
      <h1 className='text-6xl font-extrabold text-blue-700 mb-4 drop-shadow-lg'>
        404
      </h1>
      <h2 className='text-2xl font-bold text-blue-600 mb-2'>Page Not Found</h2>
      <p className='text-gray-700 mb-6'>
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        to='/'
        className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition font-semibold'
      >
        Go Home
      </Link>
    </div>
  </div>
);

export default NotFound;
