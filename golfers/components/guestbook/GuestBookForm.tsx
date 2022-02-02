import { useState } from 'react'

const GuestBookForm: React.FC = () => {
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  const submitHandler = async () => {
    console.log(name, text)
    let obj = {
      name: name,
      text: text,
    }
    let response = await fetch('/api/guestbook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
    console.log(await response.json())

    clearInputs()
  }

  const clearInputs = () => {
    setName('')
    setText('')
  }

  return (
    <div className='chatform'>
      <h1 className='chatform__header'>Skriv ett inlägg här!</h1>
      <div className='chatform__container'>
        <div className='chatform__box'>
          <label htmlFor='' className='chatform__label'>
            Namn
          </label>
          <input
            type='text'
            className='chatform__input'
            placeholder='Namn...'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='chatform__box'>
          <label htmlFor='' className='chatform__label'>
            Kommentar
          </label>
          <textarea
            className='chatform__textarea'
            placeholder='Kommentar...'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <button
        className='chatform__btn btn btn--black'
        type='button'
        onClick={submitHandler}
      >
        Skicka
      </button>
    </div>
  )
}

export default GuestBookForm
