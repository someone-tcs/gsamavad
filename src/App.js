import 'animate.css'
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <>
      <center>
        <h1 className='f13 animate__animated animate__swing'><b>gSamvad</b></h1>
        <br />
        <br />
        {/* Login Component */}
        <Login />
      </center>
    </>
  );
}

export default App;
