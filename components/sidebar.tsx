import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from 'react-icons/md'
import ListMenu from './listMenu'

// DATA
// #region navMenu
const navMenu = [
  {
    name: 'Home',
    icon: <MdHome />,
    route: '/',
  },
  {
    name: 'Search',
    icon: <MdSearch />,
    route: '/search',
  },
  {
    name: 'Your Library',
    icon: <MdLibraryMusic />,
    route: '/library',
  },
]
// #endregion
// #region musicMenu
const musicMenu = [
  {
    name: 'Create Playlist',
    icon: <MdPlaylistAdd />,
    route: '/',
  },
  {
    name: 'Favorites',
    icon: <MdFavorite />,
    route: '/favorites',
  },
]
// #endregion

const Sidebar = () => {
  const [playlists, setPlaylists] = useState([])

  const getPlaylists = async () => {
    const {
      data: { items },
    } = await axios.get('/api/playlists')
    setPlaylists(items)
  }

  useEffect(() => {
    getPlaylists()
  }, [])

  return (
    <div className='absolute flex flex-col gap-6 bg-black text-white w-40 h-[calc(100vh-96px)] p-5'>
      {/* LOGO */}
      <div className='relative h-8'>
        <Image
          src='/logo.png'
          alt='logo'
          fill
          priority
          style={{ objectFit: 'contain', objectPosition: 'left' }}
        />
      </div>

      {/* MENU */}
      <ListMenu menu={navMenu} />
      <ListMenu menu={musicMenu} />

      <hr className='-my-2 border-neutral-700' />
      {/* PLAYLIST */}
      <ListMenu menu={playlists} />
    </div>
  )
}

export default Sidebar
