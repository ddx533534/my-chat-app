import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './componets/Home/Home';
import ScrollToTop from './componets/Border/ScrollToTop';
import { NavBar } from './componets/Border/NavBar';

function App() {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
