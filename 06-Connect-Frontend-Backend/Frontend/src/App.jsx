import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    });
  },[])
  return (
    <> 
      <h1>Chai or code</h1>
    <p>JOKES: {jokes.length}</p>

    {
      jokes.map((joke, index)=>(
        <div key={joke.name}>
          <h3>{joke.branch}</h3>
          <p>{joke.college}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
