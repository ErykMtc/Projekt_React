import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Ranking from './pages/Ranking';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import SignIn from './pages/SignIn';
import Registration from './pages/Registration';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/ranking' element={<Ranking />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/register' element={<Registration />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
