import React, { useState } from 'react';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import HomeUI from './components/HomeUI';
import './App.css';

function App() {
  const [sHomeUI,setHomeUI] = useState(true)

  return (
    <div className="App">
      <header className='navContainer'>
        <div>
          <a href="#/" onClick={()=>{setHomeUI(!sHomeUI)}} className='hyperLinks'>{sHomeUI ? ">About Us" : ">Home"}</a>
        </div>
      </header>
      {sHomeUI ? <HomeUI/> : <AboutUs/>}
      <Footer/>
    </div>
  );

}

export default App;