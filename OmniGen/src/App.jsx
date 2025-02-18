import React from 'react'
import Home from './assets/pages/Home';
import { Route,Routes } from 'react-router-dom';
import Verba from './assets/pages/Verba';


const App = () => {
  return (
    <>
     <Home />
     <Routes>
        <Route path='/verba' element={<Verba />} />   
     </Routes>
    
    

    
    
      
    </>
  )
}

export default App;
