import { createBrowserRouter, RouterProvider } from 'react-router';
import Login from './form/login';
import { Form } from './form/signUp';
import Hero from './pages/Hero';
import UserDashboard from './pages/userDashboard';
import NotFound from './pages/NotFound';

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
    element: <Form />,
  },
  {
    path: '/dashboard',
    element: <UserDashboard />,
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
