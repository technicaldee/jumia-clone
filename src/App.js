import './App.css';
import Heading from './components/header';
import { Footer } from './components/footer';
import Card from './components/Card';
import { Route, Router, Routes } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import { Home } from './pages/Home';


function App() {
  return (
    <div className="App">
      <Heading />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </div >
  );
}

export default App;
