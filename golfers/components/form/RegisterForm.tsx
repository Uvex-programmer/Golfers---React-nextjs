import React, { useState } from 'react'
import Input from './components/Input'
import InlineLink from './components/InlineLink'
import Button from '../buttons/Button'
import { validateEmail, validatePassword } from '../../utils/auth'

const registerForm = () => {
  const [username, setUsername] = useState('')
  const [emailErr, setEmailErr] = useState(false)
  const [pwErr, setPwErr] = useState(false)
  const [pw, setPw] = useState('')

  const handleSubmit = async () => {
    // if (!username || !pw || pwErr || emailErr) return
    await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: username, pw: pw }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  const onChange = (value: string, type: string) => {
    if (type === 'password') {
      setPw(value)
      let checkPW = validatePassword(value)
      setPwErr(checkPW)
      return
    }
    setUsername(value)
    let checkEmail = validateEmail(value)
    setEmailErr(checkEmail)
  }

  return (
    <form className='userForm' onSubmit={handleSubmit}>
      <div className='userForm__container'>
        <div className='userForm__header'>
          <div className='textTitle'>Skapa konto</div>
          <div className='textSubtitle'>Bli en riktig golfare!</div>
        </div>
        <div className='userForm__inputContainer'>
          <Input
            label='Email adress'
            name='email'
            type='email'
            error={emailErr}
            errorMsg='Ange giltig email!'
            onChange={onChange}
          />
          <Input
            label='Lösenord'
            name='password'
            type='password'
            error={pwErr}
            errorMsg='Måste innehålla: Minst en siffra. Stor och liten bokstav. Minst 8 tecken långt!'
            onChange={onChange}
          />
        </div>

        <Button text='Skapa konto' type='button' onClick={handleSubmit} />

        <div className='userForm__extraContainer'>
          <InlineLink
            text='Har du redan ett konto?'
            textLink='Logga in!'
            link='/login'
          />
        </div>
      </div>
    </form>
  )
}

export default registerForm
