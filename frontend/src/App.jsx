import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Hero from './pages/Hero';
import Login from './form/login';
import SignUp from './form/signUp';
import UserDashboard from './pages/userDashboard';
import NotFound from './pages/NotFound';
import TaxRecord from './pages/taxRecord';
import UserLayout from './layouts/userLayouts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Hero />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/dashboard',
    element: <UserLayout />,
    children: [
      { index: true, element: <UserDashboard /> },
      { path: 'tax-records', element: <TaxRecord /> },
    ],
  },

  {
    path: '*',
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
