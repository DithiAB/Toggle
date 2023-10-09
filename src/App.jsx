import { useState } from 'react'
import Title from './Title'
import './App.css'

function App() {
  const [toggle, setToggle] = useState(true)

  return (
    <>
    <div className='main'>
      {toggle && <Title />}
      <button onClick={()=>setToggle((prev)=>!prev)}>Toggle</button>
      </div>
    </>
  )
}

export default App
