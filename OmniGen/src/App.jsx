import React from 'react'
import Home from './assets/pages/Home';
import {Link, Route,Routes } from 'react-router-dom';
import Verba from './assets/pages/Verba';
import Askify from './assets/pages/Askify';
import Currex from './assets/pages/Currex';





const App = () => {
  return (
    <>
    
     
     <Routes>
        

        <Route path='/' element={<Home />} />
        <Route path='/verba' element={<Verba />} />
        <Route path='/askify' element={<Askify /> } />
        <Route path='/currex' element={<Currex /> } />     
     </Routes>
    
    

    
    
      
    </>
  )
}

export default App;
