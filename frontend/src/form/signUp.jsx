import React, { useState } from 'react';

export function Form() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    const url = 'https://tax-system.onrender.com' || 'http://localhost:5000'
    e.preventDefault();
    setMessage('');
    setError('');
    setLoading(true);
    try {
      const response = await fetch('`${url}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
          password: e.target.password.value,
          email: e.target.email.value,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Registration successful!');
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (error) {
      setError('Error connecting to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 via-green-100 to-blue-100'>
      <div className='bg-white p-10 shadow-2xl rounded-3xl w-full max-w-lg space-y-8 border border-blue-100'>
        <h1 className='text-4xl text-center font-bold mb-6 text-blue-700 drop-shadow-lg'>
          Create an Account
        </h1>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='firstName' className='font-semibold text-blue-700'>
              First Name
            </label>
            <input
              type='text'
              name='firstName'
              className='border border-blue-300 bg-gray-50 py-3 px-4 rounded-lg focus:outline-none focus:border-blue-700 transition'
              placeholder='John'
              required
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='lastName' className='font-semibold text-blue-700'>
              Last Name
            </label>
            <input
              type='text'
              name='lastName'
              className='border border-blue-300 bg-gray-50 py-3 px-4 rounded-lg focus:outline-none focus:border-blue-700 transition'
              placeholder='Doe'
              required
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='email' className='font-semibold text-blue-700'>
              Email
            </label>
            <input
              type='email'
              name='email'
              className='border border-blue-300 bg-gray-50 py-3 px-4 rounded-lg focus:outline-none focus:border-blue-700 transition'
              placeholder='john@example.com'
              required
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='password' className='font-semibold text-blue-700'>
              Password
            </label>
            <input
              type='password'
              name='password'
              className='border border-blue-300 bg-gray-50 py-3 px-4 rounded-lg focus:outline-none focus:border-blue-700 transition'
              placeholder='********'
              required
            />
          </div>
          <div className='flex gap-2 items-center'>
            <input
              type='checkbox'
              name='remember'
              id='remember'
              className='accent-blue-600'
            />
            <label htmlFor='remember' className='text-blue-600 cursor-pointer'>
              Remember me
            </label>
          </div>
          <button
            className={`border border-blue-600 text-blue-600 font-bold w-full rounded-lg py-3 text-2xl cursor-pointer hover:bg-blue-600 hover:text-white transition-colors duration-300 ${
              loading ? 'opacity-60 cursor-not-allowed' : ''
            }`}
            type='submit'
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        {message && (
          <div className='mt-4 text-center text-green-600 font-semibold'>
            {message}
          </div>
        )}
        {error && (
          <div className='mt-4 text-center text-red-500 font-semibold'>
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
