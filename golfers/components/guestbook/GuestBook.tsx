import GuestBookChat from './GuestBookChat'
import GuestBookForm from './GuestBookForm'

const GuestBook: React.FC = () => {
  return (
    <div className='guestbook'>
      <GuestBookForm />
      <GuestBookChat />
    </div>
  )
}

export default GuestBook
