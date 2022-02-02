import Card from '../components/cards/ModalCard'
import RegisterForm from '../components/form/RegisterForm'

const SignupPage: React.FC = () => (
  <div className='registerPage page'>
    <Card
      alt='signup page'
      imageSrc={
        'https://gothammag.com/get/files/image/galleries/golf-obi-onyeador-unsplash.jpg'
      }
    >
      <RegisterForm />
    </Card>
  </div>
)

export default SignupPage
