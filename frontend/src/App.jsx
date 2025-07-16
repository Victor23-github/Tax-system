import Login from './form/login';
import { Form } from './form/signUp';
import Hero from './pages/Hero';

function App() {
  return (
    <div className='App'>
      {/* <Hero /> */}
      <h1 className='text-3xl text-center bg-white font-bold mb-4'>
        Welcome to TaxPayer
      </h1>
      <Login />
      <Form />
    </div>
  );
}

export default App;
