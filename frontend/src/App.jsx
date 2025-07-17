import Login from './form/login';
import { Form } from './form/signUp';
import Hero from './pages/Hero';
import UserDashboard from './pages/userDashboard';
import { createBrowserRouter, RouterProvider } from 'react-router';

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
    path: '/home',
    element: <UserDashboard />,
  },
  {
    path: '*',
    element: <NotFound/>,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
