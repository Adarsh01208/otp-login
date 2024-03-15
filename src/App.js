import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PhoneLogin from './components/PhoneLogin';

function App() {
  return (
    <div className='d-flex justify-content-center align-items-center ' style={{height: '100vh'}}>
      <div className=' text-center card bg-warning w-50 p-5'>
        <h1 className='text-primary'>Login With Phone</h1>
        <PhoneLogin />
      </div>
    </div>
  );
}

export default App;
