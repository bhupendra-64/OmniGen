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
                    <a className="link" href='/askify' target='_main'>
                    <p className="p1">Askify<span>AI</span></p>

                    </a>
                        
                    
                       

                    </div>
                    
                    

                </div>
                <div className="btn2">
                <div className="txt2">
                    <a className="link" href='https://sparkling-pika-7e160e.netlify.app/' target='_main'>
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
                <a className="link" href='/currex' target='_main'>
                  <p className="p2">Currex<span>AI</span></p>
                   

                </a>
                        
                    
                       

                    </div>

                </div>

            </div>


        </div>
      <div className="bottom">
        

        <br /> <br />  <br /> <hr /> <br /> <br /> 
        <a id="contact" href='https://contact-us-omenigen.netlify.app/' target='_main'>Your Query </a>
        <a id="contact" href='https://www.instagram.com/sachinnnn_64?igsh=YTRiYjI1ZTh4dHdi' target='_main'>   | Contact Us</a>
        <br /> 
        <br /> 
        <p id="rights"> © 2029 OmniGen india Ltd. All Rights Resevered. </p>
      
      </div>
        

    </div>
   
   
    </>
  )
}

export default Home;