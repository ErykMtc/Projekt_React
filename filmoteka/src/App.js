import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Ranking from './pages/Ranking';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import SignIn from './pages/SignIn';
import Registration from './pages/Registration';
import AdminNav from './components/AdminNav';
import AdminSection from './pages/AdminSection';
import Article from './pages/Article';
import News from './pages/News';
import Following from './pages/Following';
import ProtectedRoutes from './hooks/ProtectedRoutes';
import Browse from './pages/Browse';
import Cookies from 'js-cookie';

function App() {
  return (
    <>
      {/* <Router> */}
        <AdminNav />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/admin' element={<AdminSection />} />
          <Route path='/browse' element={<Browse />} />
          <Route path='/ranking' element={<Ranking />} />
        {/* <Route element={<ProtectedRoutes allowedRoles={"USER"}/>}> */}
            {Cookies.get('usrFilmoteka') && <Route path='/news' element={<News />} />}
            {Cookies.get('usrFilmoteka') && <Route path='/following' element={<Following />} />}
            {Cookies.get('usrFilmoteka') && <Route path='/movie/*' element={<Article />} />}
          {/* </Route> */}
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
        <Footer />
      {/* </Router> */}
    </>
  );
}

export default App;
