import React, { useState, useEffect } from 'react';
import Navbar from './components/nav';
import './assets/main.css';
import Images from './components/images';
import About from './components/about';
import Contact from './components/contact';
import Fade from 'react-reveal/Fade';




function App() {

  const [page, setPage] = useState('images');

  return <div >
  <div className="flex flex-col justify-center items-center p-12" >
  <Fade top>
  <h1 className="text-4xl pb-4 font-bold ">ifixPhoto gallery </h1>
  </Fade>
  
      
      <Navbar setPage={setPage}/>
  </div>
      

      <div >

      {page === 'contact' ? <Contact /> : page === 'about' ? <About /> : <Images /> }

      </div>

    </div>
  
}

export default App;
