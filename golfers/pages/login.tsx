import Card from '../components/cards/ModalCard'
import LoginForm from '../components/form/LoginForm'

const LoginPage = () => (
  <div className='loginPage page'>
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
