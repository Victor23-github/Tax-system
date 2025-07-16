import React, { useState } from 'react';

export function Form() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await fetch('http://localhost:5000/api/register', {
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
        setMessage(data.message || 'Registration failed');
      }
    } catch (error) {
      setMessage('Error connecting to server');
    }
  };

  return (
    <div className='flex justify-center items-center h-[90dvh]'>
      <div className='bg-white p-8 w-shadow-lg rounded-2xl w-86 space-y-4'>
        <h1 className='text-3xl text-center font-bold mb-4'>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-3 flex flex-col gap-1 '>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              name='firstName'
              className='border-b-2 border-b-blue-500 bg-gray-100 py-2 px-3 focus:outline-none focus:border-b-2 focus:border-b-blue-700'
              placeholder='John'
              required
            />
          </div>
          <div className='mb-3 flex flex-col gap-1'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              name='lastName'
              className='border-b-2 border-b-blue-500 bg-gray-100 py-2 px-3 focus:outline-none focus:border-b-2 focus:border-b-blue-700'
              placeholder='Doe'
              required
            />
          </div>
          <div className='mb-3 flex flex-col gap-1'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              className='border-b-2 border-b-blue-500 bg-gray-100 py-2 px-3 focus:outline-none focus:border-b-2 focus:border-b-blue-700'
              placeholder='********'
              required
            />
          </div>
          <div className='mb-3 flex flex-col gap-1'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              className='border-b-2 border-b-blue-500 bg-gray-100 py-2 px-3 focus:outline-none focus:border-b-2 focus:border-b-blue-700'
              placeholder='john@example.com'
              required
            />
          </div>
          <div className='mb-3 flex gap-1 items-center'>
            <input
              type='checkbox'
              name='remember'
              id='remember'
              className='accent-blue-600'
            />
            <span className='text-blue-300 text-center cursor-pointer hover:text-blue-500 transition-colors duration-300'>
              Remember me
            </span>
          </div>
          <button
            className='border border-blue-600 text-blue-600 font-bold w-full rounded py-1 text-2xl cursor-pointer hover:bg-blue-600 hover:text-white transition-colors duration-300'
            type='submit'
          >
            Sign Up
          </button>
        </form>
        {message && (
          <div className='mt-4 text-center text-red-500'>{message}</div>
        )}
      </div>
    </div>
  );
}
