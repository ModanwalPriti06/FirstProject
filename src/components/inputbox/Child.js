import React from 'react'
import { useState } from 'react'

function Child({name}) {
  const [prof,setProf]=useState(name);
  const handleEvent=(e)=>{
    setProf(e.target.value);
   
    
  }

  return (
    <div>
      <h1>Child</h1>
    <input type="text" placeholder='Enter Name' onChange={handleEvent} value={prof}/>
  </div>
  )
}

export default Child;