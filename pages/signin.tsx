import { signIn, signOut, useSession } from 'next-auth/react'

const Signin = () => {
  const { data: session }: any = useSession()

  if (session) {
    return (
      <div>
        Signed in as {session?.token?.email}
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }

  return (
    <div>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}

export default Signin
