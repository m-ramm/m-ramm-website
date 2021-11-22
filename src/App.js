import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='main-section'>
        <Navbar />
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
