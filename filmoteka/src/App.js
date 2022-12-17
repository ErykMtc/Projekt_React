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
import AdminNav from './components/AdminNav';
import AdminSection from './pages/AdminSection';
import Article from './pages/Article';
import News from './pages/News';
import Following from './pages/Following';
import ProtectedRoutes from './hooks/ProtectedRoutes';

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
          <Route element={<ProtectedRoutes allowedRoles={"USER"}/>}>
            <Route path='/article' element={<Article />} />
            <Route path='/ranking' element={<Ranking />} />
            <Route path='/news' element={<News />} />
            <Route path='/following' element={<Following />} />
          </Route>

        </Routes>
        <Footer />
      {/* </Router> */}
    </>
  );
}

export default App;
