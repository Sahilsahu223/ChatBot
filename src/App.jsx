import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
 async function genAnswer(){
    console.log("loading...")
    const response = await axios (
      {
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=your_api_key"
       , method: "post",
       data : {
        "contents": [{
    "parts":[{"text": "Explain how AI works"}]
    }]
       }
      }
    )


    console.log(response['data']['candidates'][0]['content']['parts'][0]['text'])
  }
  return (
    <>
    <h1>CHATBOT AI</h1>
    <button onClick={genAnswer}>Generate</button>
    </>
  )
}

export default App
