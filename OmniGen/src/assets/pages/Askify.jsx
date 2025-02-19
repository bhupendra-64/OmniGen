import React, { useState } from 'react'
import axios from 'axios'



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
    <div className="main">
      <div className="head">
        <h1>Askify<span>AI</span></h1>
      </div>
    <textarea  value={question} onChange={(e)=>{
      setquestion(e.target.value)

    }}rows="10" cols="50"></textarea>
    <button onClick={answers}>Generate Answer</button>
    <p> {answer}</p>
      
    </div>
   
    </>
  )
}

export default Askify