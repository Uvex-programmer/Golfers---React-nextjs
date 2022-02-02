import { Guestbook } from '../../components'
import { GetStaticProps } from 'next'
import { Message } from '../../interfaces/interface'
import prisma from '../../prisma/prisma'

interface Props {
  messages: [Message]
}

const GuestBookPage: React.FC<Props> = (props) => {
  return (
    <div className='guestbookpage page'>
      <h1 className='guestbookpage__header'>Gästboken</h1>
      <Guestbook messages={props.messages} />
    </div>
  )
}

export default GuestBookPage

export const getStaticProps: GetStaticProps = async (context) => {
  let res = await fetch('http://localhost:3000/api/guestbook', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const messages = await res.json()
  console.log(messages)

  return {
    props: { messages: messages }, // will be passed to the page component as props
  }
}
