import React from 'react'
import './styles/home.css'
import { Link, Route, Routes } from 'react-router-dom'



const Home = () => {
  return (
    <>
    <div className="main">
        <h1> Omni<span id="spn1">Gen </span></h1>
        <p>Powered by <span>Gemini 2.0</span></p>
        <div className="cont1">
            <div className="row1">
                <div className="btn1">
                    <div className="txt1">
                        <p className="p1">Askify<span>AI</span></p>
                    
                       

                    </div>
                    
                    

                </div>
                <div className="btn2">
                <div className="txt2">
                    <a className="link" href='https://boisterous-crumble-1413b4.netlify.app/' target='_main'>
                      <p className="p2">Artify<span>AI</span></p>
                    </a>
                        
                    
                       

                    </div>
                   
                   

                </div>

            </div>
            <div className="row2">
                <div className="btn3">
                <div className="txt2">
                    <a className="link" href='/verba' target='_main'>
                       <p className="p2">Verba<span>AI</span></p>

                    </a>

            
                    
                       

                    </div>

                </div>
                <div className="btn4">
                <div className="txt2">
                        <p className="p2">Currex<span>AI</span></p>
                    
                       

                    </div>

                </div>

            </div>


        </div>
        

    </div>
   
    </>
  )
}

export default Home;