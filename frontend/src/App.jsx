import { createBrowserRouter, RouterProvider } from 'react-router';
import { Suspense, lazy } from 'react';

// Lazy load components with proper imports
const Login = lazy(() => import('./form/login'));
const SignUp = lazy(() => import('./form/signUp')); // Fix Form import
const Hero = lazy(() => import('./pages/Hero'));
const UserDashboard = lazy(() => import('./pages/userDashboard'));
const NotFound = lazy(() => import('./pages/NotFound'));
const TaxRecord = lazy(() => import('./pages/taxRecord'));

// Loading component
const Loading = () => (
  <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-green-100 to-blue-200'>
    <div className='animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent'></div>
  </div>
);

// Route configurations
const routes = [
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
    element: <SignUp />, // Use the correctly imported SignUp component
  },
  {
    path: '/dashboard',
    element: <UserDashboard />,
  },
  {
    path: '/tax-records',
    element: <TaxRecord />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

// Create router with routes
const router = createBrowserRouter(
  routes.map((route) => ({
    ...route,
    element: <Suspense fallback={<Loading />}>{route.element}</Suspense>,
  }))
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
