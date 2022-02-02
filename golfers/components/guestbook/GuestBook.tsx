import GuestBookChat from './GuestBookChat'
import GuestBookForm from './GuestBookForm'
import { Message } from '../../interfaces/interface'

interface Props {
  messages: [Message]
}
const GuestBook: React.FC<Props> = (props) => {
  return (
    <div className='guestbook'>
      <GuestBookForm />
      <GuestBookChat messages={props.messages} />
    </div>
  )
}

export default GuestBook
