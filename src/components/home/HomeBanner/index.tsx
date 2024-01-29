import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import { Styled } from './styled'
import { useAuth } from '@hooks/useAuth'
import { LoginModal } from '@components'
import { URL } from '@constants'
import { useModal } from '@hooks'

const HomeBanner = (): ReactElement => {
  const router = useRouter()
  const { isLogin } = useAuth()
  const loginModal = useModal()

  const handleClickPosting = () => {
    if (isLogin) {
      router.push(URL.POST)

      return
    }

    loginModal.openModal()
  }

  return (
    <>
      <Styled.BannerWrapper>
        <Styled.BannerLeft>
          <Styled.BannerLeftText1>
            처치곤란한 물건이 있다면?
          </Styled.BannerLeftText1>
          <Styled.BannerLeftText2>Offer에 올려보세요!</Styled.BannerLeftText2>
          <Styled.BannerLeftSellButton onClick={handleClickPosting}>
            판매하기
          </Styled.BannerLeftSellButton>
        </Styled.BannerLeft>
        <Styled.BannerRight>
          <Styled.BannerRightTextWrapper>
            <Styled.BannerRightNewBadge>New</Styled.BannerRightNewBadge>
            <Styled.BannerRightText1>
              오늘의 새로운 상품
            </Styled.BannerRightText1>
          </Styled.BannerRightTextWrapper>
        </Styled.BannerRight>
      </Styled.BannerWrapper>
      <LoginModal isOpen={loginModal.isOpen} onClose={loginModal.closeModal} />
    </>
  )
}
export { HomeBanner }
