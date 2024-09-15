import React from 'react'
import NavBar from './Components/Header/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';
import Contact from './Pages/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className='bg-black' >
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}


export default App;