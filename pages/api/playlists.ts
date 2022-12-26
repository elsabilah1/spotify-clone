import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { getUsersPlaylists } from '../../lib/spotify'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    token: { accessToken },
  }: any = await getSession({ req })

  const { data } = await getUsersPlaylists(accessToken)

  return res.status(200).json(data)
}

export default handler
