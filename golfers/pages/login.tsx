import Card from '../components/cards/ModalCard'
import { NextPage } from 'next'
import LoginForm from '../components/form/LoginForm'
import { getSession } from 'next-auth/react'

const LoginPage = ({ session, providers }: any) => (
  <div className='loginPage page'>
    {console.log('login page')}
    <Card
      alt='login page'
      imageSrc={
        'https://static.barcelo.com/content/dam/bhg/master/es/typologies/hoteles-golf/hoteles%20golf.jpg.bhgimg.optm1100.jpg/1604670817379.jpg'
      }
    >
      <LoginForm />
    </Card>
  </div>
)

export default LoginPage

LoginPage.getInitialProps = async (context) => {
  const { req, res } = context
  const session = await getSession({ req })
  console.log('log session', session)

  if (session && res) {
    res.writeHead(302, {
      Location: '/',
    })
    res.end()
    return
  }
  return {
    session: undefined,
  }
}
