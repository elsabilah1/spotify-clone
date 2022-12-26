import axios from 'axios'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../components/layout'

const Dashboard = () => {
  const { data: session }: any = useSession()
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const getPlaylistTracks = async () => {
    setLoading(true)
    const {
      data: { items },
    } = await axios.get(`/api/tracks?playlist_id=${router.query.id}`)
    setTracks(items)
    setLoading(false)
  }

  useEffect(() => {
    if (router.query.id !== undefined) getPlaylistTracks()
  }, [router.query.id])

  return (
    <Layout>
      <header className='flex justify-between items-center p-5 h-16'>
        <div className=''>nav</div>
        <button onClick={() => signOut()}>signout</button>
        <div className='hover:cursor-pointer shadow-xl bg-neutral-500 flex items-center justify-between min-w-[96px] px-2 py-1 rounded-full'>
          {session ? (
            <>
              <p>{session?.token?.name}</p>
              <div className='relative w-8 h-8 rounded-full shadow-xl'>
                <Image
                  src={session?.token?.picture || ''}
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
      <div className='grid gap-x-5 gap-y-1 overflow-y-auto h-[calc(100vh-160px)] p-5'>
        {loading ? (
          <div>loading...</div>
        ) : (
          tracks.map((item: { track: any }) => (
            <div
              key={item.track.id}
              className='border-b border-gray-900 p-2 flex items-center gap-2'
            >
              <Image
                src={item.track.album.images[2].url}
                width={32}
                height={32}
                alt={item.track.name}
              />
              <p className='text-sm'>{item.track.name}</p>
            </div>
          ))
        )}
      </div>
    </Layout>
  )
}

export default Dashboard
