import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar'
import Home from './components/Home'
import Projects from './src/components/Project'
import Footer from './components/Footer'
function App() {
  return (
    <Router>
        <NavBar />
       <Routes>
          <Route path="/React-Portfolio/" element={<Home />} />
           <Route path="/React-Portfolio/projects" element={<Projects />} />
         </Routes>
         <Footer />
    </Router>
  );
}

export default App;