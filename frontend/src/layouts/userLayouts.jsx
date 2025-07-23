import { Outlet } from 'react-router-dom';
import UserNavbar from '../component/userNavbar';

const UserLayout = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-13 lg:grid-cols-16 min-h-screen'>
      {/* Sidebar */}
      <div className='md:block md:col-span-2 lg:col-span-3 bg-green-600 text-white'>
        <UserNavbar />
      </div>

      {/* Main Content */}
      <div className='col-span-1 md:col-span-11 lg:col-span-13 bg-green-50'>
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
