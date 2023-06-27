
import { useState } from 'react'
import './App.css'

function App() {

  const checkboxData = [
    {title:'Include Uppercase', state: false},
    {title:'Include Lowercase', state: false},
    {title:'Include Number', state: false},
    {title:'Include Symbols', state: false}
  ]

  const [length,setLength] = useState(6)
  return (
    <div className='container'>
      {/* password text and copy button */}
    <div className='header'>
      <div className='title'>ehD3#w@</div>
      <button className='copyBtn' onClick={()=>{}}>Copy</button>
    </div>

      {/* character length slider */}
      <div className='charLength'>
        <span>
          <label>Character length: </label>
          <label>{length}</label>
        </span>
        <input type='range' min='4' max='20' value={length} onChange={(e)=>setLength(e.target.value)}/>
      </div>
      {/* checkboxes */}
      <div className='checkboxes'>
        {checkboxData.map((cb,idx)=>(
          <div key={idx}>
            <input type='checkbox' checked ={cb.state}></input>
            <div>{cb.title}</div>
          </div>
        ))}
      </div>
      {/* generate button */}
    </div>
  )
}

export default App
