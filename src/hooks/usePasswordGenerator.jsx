import { useState } from 'react'

const usePasswordGenerator = () => {

    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')



    const generatePassword = (checkboxData, length) => {
        let charset = ''
        let generatedPassword = ''

        const selectedOption = checkboxData.filter(cb => cb.state)

        if (selectedOption.length === 0) {
            setErrorMessage('select at least one option')
            setPassword('')
            return
        }

        selectedOption.forEach(option => {
            switch (option.title) {
                case 'Include Uppercase':
                    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    break;
                case 'Include Lowercase':
                    charset += 'abcdefghijklmnopqrstuvwxyz'
                    break
                case 'Include Numbers':
                    charset += "0123456789"
                    break;
                case 'Include Symbols':
                    charset += "!@#$%^&*()-_=+[]{};:,.<>/?|`~"
                    break
                default:
                    break;
            }
        });
        for (let index = 0; index < length; index++) {
            const randomIdx = Math.floor(Math.random() * charset.length)
            generatedPassword += charset[randomIdx]
        }
        setPassword(generatedPassword)
        setErrorMessage('')
    }

    return { password, errorMessage, generatePassword }
}

export default usePasswordGenerator