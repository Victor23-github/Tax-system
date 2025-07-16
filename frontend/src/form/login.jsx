import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Login successful!');
        // You can redirect or store token here
      } else {
        setMessage(data.message || 'Login failed');
      }
    } catch (error) {
      setMessage('Error connecting to server');
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md bg-white rounded-lg shadow-lg p-8'>
        <h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>
          Login
        </h2>
        <form onSubmit={handleSubmit} className='space-y-5'>
          <div>
            <label className='block text-gray-700 mb-2'>Email:</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>
          <div>
            <label className='block text-gray-700 mb-2'>Password:</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>
          <button
            type='submit'
            className='w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition'
          >
            Login
          </button>
        </form>
        {message && (
          <div className='mt-4 text-center text-red-500'>{message}</div>
        )}
      </div>
    </div>
  );
};

export default Login;
