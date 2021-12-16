const GuestBookForm: React.FC = () => {
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
          />
        </div>
        <div className='chatform__box'>
          <label htmlFor='' className='chatform__label'>
            Kommentar
          </label>
          <textarea className='chatform__textarea' placeholder='Kommentar...' />
        </div>
      </div>
      <button className='chatform__btn btn btn--black'>Skicka</button>
    </div>
  )
}

export default GuestBookForm
