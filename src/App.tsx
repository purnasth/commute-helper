import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import useTheme from './hooks/useTheme';
import Home from './pages/Home';
import RouterToTop from './utils/RouterToTop';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import AboutPage from './pages/AboutPage';
import Error404 from './pages/Error404';
import Login from './layouts/Login';
import RideDetails from './pages/RideDetails';
import Policies from './pages/Policies';
import FAQPage from './pages/FAQPage';
import RoleBasedPage from './pages/RoleBasedPage';
import UserProfile from './pages/UserProfile';

const App: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Router>
        <RouterToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<FAQPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/ride-details" element={<RideDetails />} />
          <Route path="/policies/:policyId" element={<Policies />} />
          <Route path="/role/:roleId" element={<RoleBasedPage />} />
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
        theme={theme}
      />
    </>
  );
};

export default App;
