import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PhoneLogin from './components/PhoneLogin';

function App() {
  return (
   <div className='text-center card-body p-5 '>
      <h1 className='text-primary' >Login With Phone</h1>
      <PhoneLogin />
    
   </div>
  );
}

export default App;
