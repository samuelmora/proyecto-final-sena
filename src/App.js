import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

import Navbar from './components/Navbar/Navbar'
import Home from './sections/Home'
import Contact from './sections/Contact'
import GuitarAcoustic from './sections/GuitarAcoustic'
import GuitarElectric from './sections/GuitarElectric'
import WeAre from './sections/WeAre'

function App() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <Home />
        <WeAre />
        <GuitarElectric />
        <GuitarAcoustic />
        <Contact />
      </div>
    </div>
  );
}

export default App;
