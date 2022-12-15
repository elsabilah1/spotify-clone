import '../styles/globals.css'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import { Session } from 'next-auth'

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) => {
  return (
    <SessionProvider session={session}>
      <HeadComponent />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default App

const HeadComponent = () => {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>Spotify Clone</title>
    </Head>
  )
}
