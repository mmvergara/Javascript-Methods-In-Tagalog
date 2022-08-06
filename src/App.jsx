import './App.css';
import React, { useState } from 'react';
import HomeUI from './components/HomeUI.jsx';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
// import axios from 'axios'
function App() {
  
  const [sHomeUI,setHomeUI] = useState(true)
  // const [uiVal,setUIVal] = useState()
  
  // async function getUI(){
  //   const propAPI = await axios.get('https://raw.githubusercontent.com/mmvergara/Javascript-In-Tagalog/main/LINKS-MAIN.json').then(x=>x.data)
  //   setUIVal(<HomeUI api={propAPI}/>)
  //   return
  // }
  // useEffect(()=>{
  //   getUI()
  // },[])


  return (
    <div className="App">
      <header className='navContainer'>
        <div>
          <a href="#/" onClick={()=>{setHomeUI(!sHomeUI)}} className='hyperLinks'>{sHomeUI ? ">About Us" : ">Home"}</a>
        </div>
      </header>
      {sHomeUI ? <HomeUI/> : <AboutUs/>}

      {/* {sHomeUI ? uiVal : null} */}
      <Footer/>
    </div>
  ); 

}

export default App;
