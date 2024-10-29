// src/pages/LandingPage.tsx
import { Link, Outlet } from 'react-router-dom';
// import Footer from '../components/Footer';

const Landingpage = () => {
  return (
    <div>
      <h1>Welcome to SimpleSocial</h1>
      <nav>
        <Link to="login">Login</Link> | <Link to="signup">Sign Up</Link>
      </nav>
      
      {/* This is where Login or Signup components will load based on the link clicked */}
      <Outlet />

      {/* Footer Component
      <Footer /> */}
    </div>
  );
};

export default Landingpage;
