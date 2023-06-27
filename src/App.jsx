
import { useState } from 'react'
import './App.css'
import usePasswordGenerator from './hooks/usePasswordGenerator'
import StrengthChecker from './components/StrengthChecker'
import CustomButton from './components/CustomButton'
import CheckBox from './components/CheckBox'

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


  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000);
  }

  const handleLength = (e) => {
    setLength(e.target.value)
  }









  return (
    <div className='container'>

      {/* password text and copy button */}
      {password && <div className='header'>
        <div className='title'>{password}</div>
        <CustomButton onClick={() => handleCopy()} text={copied ? 'Copied' : 'Copy'} customClass='copyBtn'/>
      </div>}



      {/* character length slider */}
      <div className='charLength'>
        <span>
          <label>Character length: </label>
          <label>{length} </label>
        </span>
        <input type='range' min='4' max='20' value={length} onChange={handleLength} />
      </div>


      {/* checkboxes */}
      <CheckBox checkboxData={checkboxData} onChange={handleCheckboxData}/>


      {/* strength */}
      <StrengthChecker password={password}/>

      {/* error */}
      {errorMessage && <div className='errorMessage'>{errorMessage}</div>}

      {/* generate button */}
      
      <CustomButton onClick={() => generatePassword(checkboxData, length)} text='Generate' customClass='generateBtn'/>
    </div>
  )
}

export default App
