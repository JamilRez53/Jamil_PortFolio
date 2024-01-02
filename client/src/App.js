import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className='w-screen h-full bg-[#000119]'>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
