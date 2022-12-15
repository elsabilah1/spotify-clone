const PlayerBar = () => {
  const songs = []
  const activeSong = {}

  return (
    <div className='absolute flex bottom-0 w-full h-24 bg-neutral-800 text-white px-5 py-3'>
      <div className='border h-full w-20'>{/* SONG COVER */}</div>
      <div className='border w-1/2 h-full mx-auto'>{/* PLAYER */}</div>
      <div className='border h-full w-40'>{/* SONG COVER */}</div>
    </div>
  )
}

export default PlayerBar
