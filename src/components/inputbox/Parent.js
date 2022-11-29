import React, { useState } from 'react'
import Child from './Child';

function Parent() {
  const [name,setName]=useState("");

  return (
    <div>
      <form>
        <h1>Parent</h1>
      <input type="text" placeholder='Enter name' value={name}/>
      <Child name={name} setName={setName}></Child>
      </form>
    </div>
  )
}

export default Parent