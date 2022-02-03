import React, { useState, useEffect } from 'react'
import Input from './components/Input'
import InlineLink from './components/InlineLink'
import Button from '../buttons/Button'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { RiH1 } from 'react-icons/ri'

const loginForm = () => {
  const [email, setEmail] = useState<string | string[] | undefined>('')
  const [emailErr, setEmailErr] = useState(false)
  const [pwErr, setPwErr] = useState(false)
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState<string | string[]>('')

  const router = useRouter()

  useEffect(() => {
    // Getting the error details from URL
    if (router.query.error) {
      setLoginError(router.query.error) // Shown below the input field in my example
    }
  }, [router])

  const handleSubmit = () => {
    signIn('credentials', {
      email: email,
      password: password,
      callbackUrl: `http://localhost:3000`,
    })
  }

  const onChange = (value: string, type: string) => {
    if (type === 'password') {
      setPassword(value)
      return
    }
    setEmail(value)
  }

  return (
    <form className='userForm' action='/api/auth/signin/email'>
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
          {loginError && (
            <h1 style={{ color: 'red', backgroundColor: 'black' }}>
              Fel email eller lösenord!
            </h1>
          )}
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
