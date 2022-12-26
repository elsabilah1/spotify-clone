import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { getPlaylistsTracks } from '../../lib/spotify'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    token: { accessToken },
  }: any = await getSession({ req })

  const { playlist_id } = req.query

  const { data } = await getPlaylistsTracks(
    accessToken,
    playlist_id!.toString()
  )

  return res.status(200).json(data)
}

export default handler
