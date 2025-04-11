import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import RouterToTop from './utils/RouterToTop';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import FAQPage from './pages/FAQPage';
import AboutPage from './pages/AboutPage';
import RiderPage from './pages/RiderPage';
import Error404 from './pages/Error404';
import PassengerPage from './pages/PassengerPage';
import Login from './layouts/Login';
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <RouterToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<FAQPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/hero" element={<RiderPage />} />
          <Route path="/passenger" element={<PassengerPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
