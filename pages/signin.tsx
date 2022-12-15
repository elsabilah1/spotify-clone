import { signIn, useSession } from 'next-auth/react'

const Signin = () => {
  const session = useSession()
  return (
    <div>{!session && <button onClick={() => signIn()}>Sign in</button>}</div>
  )
}

export default Signin
