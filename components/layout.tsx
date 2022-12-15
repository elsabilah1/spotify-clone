import PlayerBar from './playerBar'
import Sidebar from './sidebar'

interface layoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: layoutProps) => {
  return (
    <div>
      <Sidebar />
      <div className='ml-40 bg-black text-white h-[calc(100vh-96px)]'>
        {children}
      </div>
      <PlayerBar />
    </div>
  )
}

export default Layout
