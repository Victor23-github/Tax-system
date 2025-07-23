import React, { useState } from 'react';

const mockUser = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  lastLogin: '2025-07-17 09:30',
};

const mockTaxes = [
  { year: 2024, status: 'Filed', refund: '$500' },
  { year: 2023, status: 'Filed', refund: '$300' },
  { year: 2022, status: 'Pending', refund: '-' },
];

const mockNotifications = [
  { id: 1, message: 'Your 2024 tax return has been processed.', read: false },
  { id: 2, message: 'Reminder: File your 2022 taxes.', read: false },
];

const UserDashboard = () => {
  const [notifications, setNotifications] = useState(mockNotifications);

  const handleMarkRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-100 via-green-100 to-green-200 py-8 px-2'>
      <div className='max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-green-100'>
        <h1 className='text-3xl md:text-4xl font-extrabold text-green-700 mb-6 text-center drop-shadow-lg'>
          Welcome, {mockUser.firstName}!
        </h1>
        <div className='mb-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Profile Section */}
          <div className='flex flex-col'>
            <h2 className='text-xl md:text-2xl font-bold text-green-600 mb-2'>
              Profile
            </h2>
            <div className='bg-green-50 rounded-lg p-4 shadow space-y-2'>
              <p>
                <span className='font-semibold'>Name:</span>{' '}
                {mockUser.firstName} {mockUser.lastName}
              </p>
              <p>
                <span className='font-semibold'>Email:</span> {mockUser.email}
              </p>
              <p>
                <span className='font-semibold'>Last Login:</span>{' '}
                {mockUser.lastLogin}
              </p>
            </div>
          </div>
          {/* Tax Summary Section */}
          <div className='flex flex-col'>
            <h2 className='text-xl md:text-2xl font-bold text-green-600 mb-2'>
              Tax Summary
            </h2>
            <div className='overflow-x-auto'>
              <table className='w-full bg-green-50 rounded-lg shadow text-left'>
                <thead>
                  <tr>
                    <th className='py-2 px-4'>Year</th>
                    <th className='py-2 px-4'>Status</th>
                    <th className='py-2 px-4'>Refund</th>
                  </tr>
                </thead>
                <tbody>
                  {mockTaxes.map((tax) => (
                    <tr key={tax.year} className='border-t border-green-100'>
                      <td className='py-2 px-4'>{tax.year}</td>
                      <td className='py-2 px-4'>{tax.status}</td>
                      <td className='py-2 px-4'>{tax.refund}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Notifications Section */}
        <div>
          <h2 className='text-xl md:text-2xl font-bold text-green-600 mb-2'>
            Notifications
          </h2>
          <ul className='space-y-3'>
            {notifications.map((note) => (
              <li
                key={note.id}
                className={`p-4 rounded-lg shadow flex flex-col md:flex-row justify-between items-start md:items-center ${
                  note.read
                    ? 'bg-gray-100 text-gray-500'
                    : 'bg-green-50 text-green-800'
                }`}
              >
                <span className='mb-2 md:mb-0'>{note.message}</span>
                {!note.read && (
                  <button
                    className='px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition self-end md:self-auto'
                    onClick={() => handleMarkRead(note.id)}
                  >
                    Mark as read
                  </button>
                )}
              </li>
            ))}
            {notifications.length === 0 && (
              <li className='p-4 rounded-lg bg-gray-100 text-gray-500 text-center'>
                No notifications.
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
