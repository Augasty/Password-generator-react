
import { useState } from 'react'
import './App.css'
import usePasswordGenerator from './hooks/usePasswordGenerator'

function App() {

  const [length, setLength] = useState(6)
  const [checkboxData, setCheckboxData] = useState(
    [{ title: 'Include Uppercase', state: false },
    { title: 'Include Lowercase', state: false },
    { title: 'Include Numbers', state: false },
    { title: 'Include Symbols', state: false }])

  function handleCheckboxData(idx) {
    const updatedData = [...checkboxData]
    updatedData[idx].state = !updatedData[idx].state
    setCheckboxData(updatedData)
  }


  const { password, errorMessage, generatePassword } = usePasswordGenerator()


  const handleCopy=()=>{
    navigator.clipboard.writeText(password)
  }

  const handleLength = (e) =>{
    setLength(e.target.value)
  }




  




  return (
    <div className='container'>
      {/* password text and copy button */}
      {password && <div className='header'>
        <div className='title'>{password}</div>
        <button className='copyBtn' onClick={() => handleCopy()}>Copy</button>
      </div>}

      {/* character length slider */}
      <div className='charLength'>
        <span>
          <label>Character length: </label>
          <label>{length} </label>
        </span>
        <input type='range' min='4' max='20' value={length} onChange={()=>handleLength} />
      </div>
      {/* checkboxes */}
      <div className='checkboxes'>
        {checkboxData.map((cb, idx) => (
          <div key={idx}>
            <input type='checkbox' checked={cb.state} onChange={() => handleCheckboxData(idx)}></input>
            <div>{cb.title}</div>
          </div>
        ))}
      </div>


      {/* error */}
      
    {errorMessage && <div className='errorMessage'>{errorMessage}</div>}

      {/* generate button */}
      <button className='generateBtn' onClick={() => generatePassword(checkboxData,length)}>Generate</button>
    </div>
  )
}

export default App
