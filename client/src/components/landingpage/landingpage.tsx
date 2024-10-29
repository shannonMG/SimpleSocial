// src/pages/LandingPage.tsx

import { Link, Outlet, useLocation } from 'react-router-dom';
// import Footer from '../components/Footer';

const LandingPage = () => {
  const location = useLocation();

  // Check if the path is exactly '/' to display the welcome message and links
  const isBaseRoute = location.pathname === '/';

  return (
    <div>
      {isBaseRoute && (
        <>
          <h1>Welcome to SimpleSocial</h1>
          <nav>
            <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
          </nav>
        </>
      )}

      {/* Render either Login or Signup based on the current route */}
      <Outlet />

      {/* Footer will always be displayed */}
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
