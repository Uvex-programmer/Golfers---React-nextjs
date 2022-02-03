import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { User } from '../../interfaces/interface'
import prisma from '../../prisma/prisma'

interface Props {
  user: User
}

function ProfilePage(props: Props) {
  console.log(props)

  return (
    <div className='page'>
      <p style={{ margin: '0 auto' }}>ProfilePage asdasd ad sada sda asd</p>
    </div>
  )
}
ProfilePage.auth = true

export default ProfilePage

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  query,
}) => {
  const session = await getSession({ req })
  if (!session?.user) {
    return { props: { user: null } }
  }

  // let user = await fetch(`http://localhost:3000/api/user/${session.user.id}`, {
  //   method: 'GET',
  //   headers: { 'Content-Type': 'application/json' },
  // })
  let user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
    select: {
      Handicap: true,
      email: true,
      image: true,
    },
  })

  return {
    props: { user: user }, // will be passed to the page component as props
  }
}
