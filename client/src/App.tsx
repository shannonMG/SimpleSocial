
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/landingpage/login';
import Signup from'./components/landingpage/signup';
import Landingpage from './components/landingpage/landingpage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />}>
          {/* Nested routes for login and signup */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;