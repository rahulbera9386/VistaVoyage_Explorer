import './App.css';
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './component/Pages/Home';
import Service from './component/Pages/Service';
import About from './component/Pages/About';
import Contact from './component/Pages/Contact';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>

    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/service" element={<Service/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
