import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'
import GithubCard from './components/GithubCard';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className='main-section'>
        {/* <div id='contact-card-container'>
          <GithubCard imagePath='GitHub-Mark-64px.png' goto="https://github.com/m-ramm" text='My Github'/>
          <GithubCard imagePath='Linkedin-logo-icon-png.png' goto="https://www.linkedin.com/in/max-ramm-2563071b4/" text='My LinkedIn' fade='contact-card fade-in-bottom-medium'/>
        </div> */}

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
