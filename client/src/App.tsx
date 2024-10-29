// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingpage/landingpage';
import Login from './components/landingpage/login';
import Signup from './components/landingpage/signup';
import styles from './App.module.css';

const App = () => {
  return (
    <Router>
      <div className={styles.appContainer}>
        <div className={styles.componentWrapper}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
