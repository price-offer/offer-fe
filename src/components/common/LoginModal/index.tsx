import { useRouter } from 'next/router'
import { Styled } from './styled'
import type { LoginModalProps } from './types'
import { CommonModal } from '../CommonModal'
import { OAUTH_URL } from '@constants'

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const router = useRouter()

  const handleClickLogin = () => {
    router.replace(OAUTH_URL.KAKAO)
  }

  return (
    <CommonModal
      buttons={[
        <Styled.KaKaoButton
          key="kakao-button"
          color="kakao"
          icon="kakao"
          size="large"
          onClick={handleClickLogin}>
          카카오로 시작하기
        </Styled.KaKaoButton>
      ]}
      hasLogo
      isOpen={isOpen}
      title={`가격을 제안해보세요\n경매식 중고거래, Offer!`}
      onClose={onClose}
    />
  )
}
