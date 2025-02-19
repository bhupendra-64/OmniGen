import React from 'react'
import Home from './assets/pages/Home';
import {Link, Route,Routes } from 'react-router-dom';
import Verba from './assets/pages/Verba';




const App = () => {
  return (
    <>
    
     
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/verba' element={<Verba />} />   
     </Routes>
    
    

    
    
      
    </>
  )
}

export default App;
