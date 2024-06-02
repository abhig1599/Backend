import React, { useEffect, useState } from 'react'
import "./App.css"
import axios from 'axios';


const App = () => {
  const [jokes, setJokes] = useState([])
  useEffect(()=>{
    axios.get("/api/jokes")
    .then((response)=>{
      setJokes(response.data)
      console.log(jokes)
    })
    .catch((error)=>{
      console.log("error")
    })
  },[1000])
  return (
    
    <div>
      <h1>hello</h1>
      <h2>the no. of jokes in the list is {jokes.length}</h2>
        {
          jokes.map((jokes,index)=>(
          <div key={jokes.id}>
            <h3>{jokes.name}</h3>
            <h4>{jokes.descripition}</h4>
            <br/>
          </div>
          ))
        }
    </div>

  )
}

export default App
