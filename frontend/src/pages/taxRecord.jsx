import React, { useState } from 'react';

const mockTaxRecords = [
  {
    id: 1,
    year: 2024,
    amount: 5000,
    status: 'Pending',
    type: 'Income Tax',
    dueDate: '2024-04-15',
    paymentDate: null,
  },
  {
    id: 2,
    year: 2023,
    amount: 4500,
    status: 'Paid',
    type: 'Income Tax',
    dueDate: '2023-04-15',
    paymentDate: '2023-04-10',
  },
  {
    id: 3,
    year: 2022,
    amount: 4000,
    status: 'Paid',
    type: 'Income Tax',
    dueDate: '2022-04-15',
    paymentDate: '2022-04-12',
  },
];

const TaxRecord = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filterRecords = () => {
    return mockTaxRecords
      .filter(
        (record) =>
          selectedYear === 'all' || record.year.toString() === selectedYear
      )
      .filter(
        (record) =>
          record.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          record.status.toLowerCase().includes(searchTerm.toLowerCase())
      );
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-100 via-green-100 to-blue-200 py-4 px-1'>
      <div className='max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-3 md:p-10'>
        <h1 className='text-3xl md:text-4xl font-extrabold text-blue-700 mb-8 text-center'>
          Tax Records
        </h1>

        {/* Filters */}
        <div className='flex flex-col md:flex-row gap-4 mb-8'>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className='p-2 border border-blue-300 rounded-lg focus:outline-none focus:border-blue-500'
          >
            <option value='all'>All Years</option>
            <option value='2024'>2024</option>
            <option value='2023'>2023</option>
            <option value='2022'>2022</option>
          </select>
          <input
            type='text'
            placeholder='Search records...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='p-2 border border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 flex-grow'
          />
        </div>

        {/* Records Table */}
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse bg-white rounded-lg shadow'>
            <thead className='bg-blue-600 text-white'>
              <tr>
                <th className='py-3 px-4 text-left'>Year</th>
                <th className='py-3 px-4 text-left'>Type</th>
                <th className='py-3 px-4 text-left'>Amount</th>
                <th className='py-3 px-4 text-left'>Status</th>
                <th className='py-3 px-4 text-left'>Due Date</th>
                <th className='py-3 px-4 text-left'>Payment Date</th>
                <th className='py-3 px-4 text-left'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filterRecords().map((record) => (
                <tr
                  key={record.id}
                  className='border-b border-gray-200 hover:bg-blue-50 transition-colors'
                >
                  <td className='py-3 px-4'>{record.year}</td>
                  <td className='py-3 px-4'>{record.type}</td>
                  <td className='py-3 px-4'>${record.amount}</td>
                  <td className='py-3 px-4'>
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        record.status === 'Paid'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {record.status}
                    </span>
                  </td>
                  <td className='py-3 px-4'>{record.dueDate}</td>
                  <td className='py-3 px-4'>{record.paymentDate || '-'}</td>
                  <td className='py-3 px-4'>
                    <button
                      className='text-blue-600 hover:text-blue-800 font-medium'
                      onClick={() =>
                        alert(`View details for tax record ${record.id}`)
                      }
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary Section */}
        <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='bg-blue-50 p-4 rounded-lg shadow'>
            <h3 className='font-semibold text-blue-700'>Total Paid</h3>
            <p className='text-2xl font-bold text-blue-900'>
              $
              {mockTaxRecords.reduce(
                (sum, record) =>
                  record.status === 'Paid' ? sum + record.amount : sum,
                0
              )}
            </p>
          </div>
          <div className='bg-yellow-50 p-4 rounded-lg shadow'>
            <h3 className='font-semibold text-yellow-700'>Pending Payment</h3>
            <p className='text-2xl font-bold text-yellow-900'>
              $
              {mockTaxRecords.reduce(
                (sum, record) =>
                  record.status === 'Pending' ? sum + record.amount : sum,
                0
              )}
            </p>
          </div>
          <div className='bg-green-50 p-4 rounded-lg shadow'>
            <h3 className='font-semibold text-green-700'>Next Due Date</h3>
            <p className='text-2xl font-bold text-green-900'>
              {mockTaxRecords.find((record) => record.status === 'Pending')
                ?.dueDate || 'No pending dues'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxRecord;
