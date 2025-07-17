import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setLoading(true);
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
        setTimeout(() => {
          navigate('/home');
        }, 1000);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      setError('Error connecting to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-green-100 to-blue-100'>
      <div className='w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 border border-blue-100'>
        <h2 className='text-4xl font-extrabold mb-8 text-center text-blue-700 drop-shadow-lg'>
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='flex flex-col gap-2'>
            <label className='font-semibold text-blue-700'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='border border-blue-300 bg-gray-50 py-3 px-4 rounded-lg focus:outline-none focus:border-blue-700 transition'
              placeholder='john@example.com'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='font-semibold text-blue-700'>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='border border-blue-300 bg-gray-50 py-3 px-4 rounded-lg focus:outline-none focus:border-blue-700 transition'
              placeholder='********'
            />
          </div>
          <button
            type='submit'
            className={`border border-blue-600 text-blue-600 font-bold w-full rounded-lg py-3 text-2xl cursor-pointer hover:bg-blue-600 hover:text-white transition-colors duration-300 ${
              loading ? 'opacity-60 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Logging In...' : 'Login'}
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
};

export default Login;
