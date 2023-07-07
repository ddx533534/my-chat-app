import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './componets/Home/Home';
import ScrollToTop from './componets/Border/ScrollToTop';
import NavBar from './componets/Border/NavBar';
import Profile from './componets/Profile/Profile';

function App() {
  return (
    <Router >
      <div id="base-page">
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
