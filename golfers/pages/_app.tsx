import '../styles/main.scss'
import { Layout } from '../components'
import { SessionProvider, useSession } from 'next-auth/react'
import ClipLoader from 'react-spinners/ClipLoader'

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <SessionProvider>
      <Layout>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </SessionProvider>
  )
}

export default MyApp

function Auth({ children }: any) {
  const { data: session, status } = useSession({ required: true })
  const isUser = !!session?.user

  if (isUser) {
    return children
  }

  return (
    <div className='page' style={{ display: 'grid' }}>
      <div style={{ justifySelf: 'center', alignSelf: 'center' }}>
        <ClipLoader color='#20e3b2' size={100} />
      </div>
    </div>
  )
}
