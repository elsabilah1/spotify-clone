import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Layout from '../components/layout'

const Dashboard = () => {
  const { data } = useSession()

  return (
    <Layout>
      <header className='flex justify-between items-center p-5'>
        <div className=''>nav</div>
        <div className='hover:cursor-pointer shadow-xl bg-neutral-500 flex items-center justify-between min-w-[96px] px-2 py-1 rounded-full'>
          {data ? (
            <>
              <p>{data?.user?.name}</p>
              <div className='relative w-8 h-8 rounded-full shadow-xl'>
                <Image
                  src={data?.user?.image || ''}
                  alt='profile'
                  fill
                  style={{ borderRadius: '100%' }}
                />
              </div>
            </>
          ) : (
            <div className='text-xs'>Loading...</div>
          )}
        </div>
      </header>
      <h1 className='text-3xl font-bold underline'>main content</h1>
    </Layout>
  )
}

export default Dashboard
