import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useLoginQuery } from '@apis'

const AuthRedirectionPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [kakaoCode, setKakaoCode] = useState('')
  const { data: userData } = useLoginQuery(kakaoCode)

  const getKakaoCode = async () => {
    const code = searchParams.get('code')

    if (code) {
      setKakaoCode(code)
    }
  }

  const updateUserAtom = async () => {
    if (userData) {
      router.replace('/')
    }
  }

  useEffect(() => {
    getKakaoCode()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  useEffect(() => {
    updateUserAtom()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData])
}

export default AuthRedirectionPage
