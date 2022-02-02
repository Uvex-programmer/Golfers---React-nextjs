import React, { useState } from 'react'
import Input from './components/Input'
import InlineLink from './components/InlineLink'
import Button from '../buttons/Button'

const loginForm = () => {
  const [username, setUsername] = useState('')
  const [emailErr, setEmailErr] = useState(false)
  const [pwErr, setPwErr] = useState(false)
  const [pw, setPw] = useState('')

  const handleSubmit = () => {
    console.log('submit', username, 'pw: ', pw)
  }

  const onChange = (value: string, type: string) => {
    if (type === 'password') {
      setPw(value)
      return
    }
    setUsername(value)
  }

  return (
    <form className='userForm' onSubmit={handleSubmit}>
      <div className='userForm__container'>
        <div className='userForm__header'>
          <div className='textTitle'>Logga in</div>
          <div className='textSubtitle'>Välkommen tillbaka!</div>
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

        <Button text='Log in' type='button' onClick={handleSubmit} />

        <div className='userForm__extraContainer'>
          <InlineLink
            text='Logga in med ett sociala medie konto?'
            textLink='Medie konto'
            link='media'
          />

          <InlineLink
            text='Inget konto?'
            textLink='Registrera här'
            link='/register'
          />

          <InlineLink
            text='Glömt lösenord?'
            textLink='Återställ lösenord'
            link='test'
          />
        </div>
      </div>
    </form>
  )
}

export default loginForm
