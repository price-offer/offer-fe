import { Divider } from '@offer-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Styled } from './styled'
import { pageTabs } from '../pageTabs'
import { VALID_NICKNAME_MESSAGE } from '@constants/message'
import {
  useCheckValidNicknameMutation,
  useGetProfileQuery,
  usePostUploadImageMutation,
  useUpdateMyProfileMutation
} from '@apis'
import type { EditProfileForm } from '@components'
import { EditProfileModal, ProfileBox, Tabs } from '@components'
import { useModal } from '@hooks'
import type { TradeActivityCodes } from '@types'
import { isNumber } from '@utils'

const initialEditProfileValidate = {
  isSuccess: false,
  message: ''
}

type ShopPageViewProps = {
  memberId: number | null
  currentTab: TradeActivityCodes
}
export const ShopPageView = ({ memberId, currentTab }: ShopPageViewProps) => {
  const [currentPage, setCurrentPage] = useState<TradeActivityCodes>(currentTab)
  const [editProfileValidate, setEditProfileValidate] = useState(
    initialEditProfileValidate
  )

  const profile = useGetProfileQuery(memberId)
  const postUploadImage = usePostUploadImageMutation()
  const checkValidNickname = useCheckValidNicknameMutation()
  const updateMyProfile = useUpdateMyProfileMutation()

  const hasToken = !isNumber(memberId)
  const profileModal = useModal()
  const router = useRouter()

  const handleChangePage = (code: TradeActivityCodes) => (): void => {
    router.push(`${router.pathname}?tab=${code}`)
    setCurrentPage(code)
  }

  const handleValidateNickname = async (nickname: string) => {
    if (nickname.length === 0) {
      setEditProfileValidate({
        isSuccess: false,
        message: VALID_NICKNAME_MESSAGE.EMPTY_ERROR
      })
      return
    }

    if (nickname.length < 2) {
      setEditProfileValidate({
        isSuccess: false,
        message: VALID_NICKNAME_MESSAGE.MIN_LENGTH_ERROR
      })
      return
    }

    const { duplicate } = await checkValidNickname.mutateAsync(nickname)

    if (duplicate) {
      setEditProfileValidate({
        isSuccess: false,
        message: VALID_NICKNAME_MESSAGE.DUPLICATED_ERROR
      })
    } else {
      setEditProfileValidate({
        isSuccess: true,
        message: VALID_NICKNAME_MESSAGE.SUCCESS
      })
    }
  }
  const handleChangeProfileImage = async (image: EditProfileForm['image']) => {
    if (!image.file) {
      return image
    }

    const imageFormData = new FormData()
    imageFormData.append('files', image.file)
    const { imageUrl } = await postUploadImage.mutateAsync(imageFormData)

    return { id: image.id, file: image.file, url: imageUrl }
  }

  const handleCloseEditProfileModal = () => {
    setEditProfileValidate(initialEditProfileValidate)
    profileModal.closeModal()
  }
  const handleConfirmEditProfile = async (profileForm: EditProfileForm) => {
    await updateMyProfile.mutateAsync({
      memberId: profile.data.id,
      nickname: profileForm.nickname,
      profileImageUrl: profileForm.image.url
    })
    await profile.refetch()

    handleCloseEditProfileModal()
  }

  return (
    <div>
      <Styled.UserName>{profile.data.nickname}님의 거래 활동</Styled.UserName>
      <Divider />
      <Tabs>
        <Styled.Layout>
          <Tabs.List>
            {pageTabs
              .filter(pageTab => (hasToken ? true : pageTab.tab.code !== 'buy'))
              .map(({ tab }) => (
                <Styled.Tab
                  key={`${tab.code}-tab`}
                  isSelected={currentPage === tab.code}
                  onClick={handleChangePage(tab.code)}>
                  {tab.name}
                </Styled.Tab>
              ))}
          </Tabs.List>
        </Styled.Layout>
        <Divider />
        <Styled.Layout>
          <Styled.TabPanels>
            {pageTabs
              .filter(pageTab => (hasToken ? true : pageTab.tab.code !== 'buy'))
              .map(({ tab, panel }) => (
                <Tabs.Panel key={`${tab.code}-panel`}>
                  <Styled.TabPanelContent>
                    <ProfileBox
                      {...profile.data}
                      hasToken={hasToken}
                      onClickEditButton={profileModal.openModal}
                    />
                    {panel({ hasToken, memberId })}
                  </Styled.TabPanelContent>
                </Tabs.Panel>
              ))}
          </Styled.TabPanels>
        </Styled.Layout>
      </Tabs>
      <Divider />
      <EditProfileModal
        isOpen={profileModal.isOpen}
        validate={editProfileValidate}
        onChangeImage={handleChangeProfileImage}
        onClose={handleCloseEditProfileModal}
        onConfirm={handleConfirmEditProfile}
        onValidateNickname={handleValidateNickname}
      />
    </div>
  )
}
