import React, { useState } from 'react'
import Input from './components/Input'
import InlineLink from './components/InlineLink'
import Button from '../buttons/Button'

const registerForm = () => {
  const [username, setUsername] = useState('')
  const [emailErr, setEmailErr] = useState(false)
  const [pwErr, setPwErr] = useState(false)
  const [pw, setPw] = useState('')

  const handleSubmit = () => {
    console.log('submit', username, 'pw: ', pw)
  }

  const validateEmail = (email: string) => {
    if (email.length < 1) {
      setEmailErr(false)
      return
    }
    const EMAIL_REGEX = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}')

    let check = EMAIL_REGEX.test(email)
    check ? setEmailErr(false) : setEmailErr(true)
  }

  const validatePw = (pw: string) => {
    if (pw.length < 1) {
      setPwErr(false)
      return
    }
    const PW_REGEX = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')

    let show = PW_REGEX.test(pw)
    show ? setPwErr(false) : setPwErr(true)
  }

  const onChange = (value: string, type: string) => {
    if (type === 'password') {
      setPw(value)
      validatePw(value)
      return
    }
    setUsername(value)
    validateEmail(value)
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
