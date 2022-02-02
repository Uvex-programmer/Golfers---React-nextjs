import { Message } from '../../interfaces/interface'
interface Props {
  messages: [Message]
}

const GuestBookChat: React.FC<Props> = (props) => {
  return (
    <div className='guestchat'>
      {props.messages.map((msg, index) => {
        return (
          <div className='message' key={index}>
            <p>{msg.createdAt}</p>
            <h3>{msg.name}</h3>
            <h3>{msg.text}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default GuestBookChat
