import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const BASE_URL = 'https://offer-be.kro.kr'

const RedirectionPage = () => {
  const router = useRouter()

  const login = async () => {
    const code = new URL(window.location.toString()).searchParams.get('code')

    if (code) {
      try {
        await axios.get(`${BASE_URL}/api/login/kakao?code=${code}`)

        router.replace('/')
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    }
  }

  useEffect(() => {
    login()
  }, [])
}

export default RedirectionPage
