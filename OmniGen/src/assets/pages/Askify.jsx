import React, { useState } from 'react'
import axios from 'axios'
import './styles/askify.css'



const Askify = () => {
  const [question, setquestion] = useState("")
  const [answer, setanswer] = useState("")
  async function answers(){
    setanswer("Loading....")
    const responce= await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyChNRtXLC8QbljFXH1p_iZ18RuRoyoGfB4",
      method:"POST",
      data:{
        contents:[
          {parts: [{text: question}]}
        ],
      },
    });
    setanswer(responce['data']['candidates'][0]['content']['parts'][0]['text']);
    setquestion("")
  }
  
  return (
    <>
    <div className="main1">
      <div className="head">
        <h1>Askify<span>AI</span></h1>
        <p>Powered by <span>Gemini 2.0</span></p>
      </div>
      <div className="text">
      <textarea className='textarea1' value={question} placeholder='write your prompt here.....' onChange={(e)=>{
      setquestion(e.target.value)

    }}rows="10" cols="50"></textarea>

    
     <textarea className='textarea2' value= {answer} rows="10" cols="50"></textarea> 

      </div>
    
    <button onClick={answers}>Generate Answer</button>
      
    </div>
   
    </>
  )
}

export default Askify