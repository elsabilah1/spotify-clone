import axios from 'axios'

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`
const PLAYLISTS_ENDPOINT = 'https://api.spotify.com/v1/me/playlists'
const BP_ALBUMS_ENDPOINT =
  'https://api.spotify.com/v1/artists/41MozSoPIsD1dJM0CLPjZF/albums'
const TAYLOR_ALBUMS_ENDPOINT =
  'https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02/albums'

const getAccessToken = async (refresh_token: string) => {
  const response = await axios.post(
    TOKEN_ENDPOINT,
    new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
    {
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  )

  return response
}

export const getUsersPlaylists = async (refresh_token: string) => {
  const {
    data: { access_token },
  } = await getAccessToken(refresh_token)

  const response = await axios.get(PLAYLISTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  return response
}

export const getPlaylistsTracks = async (
  refresh_token: string,
  playlist_id: string
) => {
  const {
    data: { access_token },
  } = await getAccessToken(refresh_token)

  const url = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  return response
}
