import { Divider } from '@offer-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Styled } from './styled'
import { EditProfileModal } from '../EditProfileModal'
import type { EditProfileForm } from '../EditProfileModal/types'
import { ProfileBox } from '../ProfileBox'
import { Tabs } from '@components/common'
import { pageTabs, tabList } from '@components/shop/pageTabs'
import { useValidateNickname } from '@hooks/useValidateNickname'
import {
  useCreateUploadImagesMutation,
  useGetProfileQuery,
  useUpdateMyProfileMutation
} from '@apis'
import { useModal } from '@hooks'
import type { TradeActivityCodes } from '@types'
import { isNumber } from '@utils'

const initialEditProfileValidate = {
  isSuccess: false,
  message: ''
}

type ShopPageLayoutProps = {
  memberId: number | null
  currentTab: TradeActivityCodes
}
export const ShopPageLayout = ({
  memberId,
  currentTab
}: ShopPageLayoutProps) => {
  const defaultTabIndex = tabList.findIndex(tab => tab === currentTab)
  const [currentPage, setCurrentPage] = useState<TradeActivityCodes>(currentTab)
  const [editProfileValidate, setEditProfileValidate] = useState(
    initialEditProfileValidate
  )

  const profile = useGetProfileQuery(memberId)
  const createUploadImage = useCreateUploadImagesMutation()
  const updateMyProfile = useUpdateMyProfileMutation()

  const isLogin = !isNumber(memberId)
  const profileModal = useModal()
  const router = useRouter()
  const validateNickname = useValidateNickname()

  const handleChangePage = (code: TradeActivityCodes) => (): void => {
    router.push(`${router.pathname}?tab=${code}`)
    setCurrentPage(code)
  }

  const handleValidateNickname = async (nickname: string) => {
    const validate = await validateNickname(nickname)
    setEditProfileValidate(validate)
  }
  const handleChangeProfileImage = async (image: EditProfileForm['image']) => {
    if (!image.file) {
      return image
    }

    const imageFormData = new FormData()
    imageFormData.append('files', image.file)
    const { imageUrls } = await createUploadImage.mutateAsync(imageFormData)

    return { id: image.id, file: image.file, url: imageUrls[0] }
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
      <Tabs defaultTabIndex={defaultTabIndex}>
        <Styled.Layout>
          <Tabs.List>
            {pageTabs
              .filter(pageTab => (isLogin ? true : pageTab.tab.code !== 'buy'))
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
              .filter(pageTab => (isLogin ? true : pageTab.tab.code !== 'buy'))
              .map(({ tab, panel }) => (
                <Tabs.Panel key={`${tab.code}-panel`}>
                  <Styled.TabPanelContent>
                    <ProfileBox
                      {...profile.data}
                      isLogin={isLogin}
                      onClickEditButton={profileModal.openModal}
                    />
                    {panel({ isLogin, memberId })}
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
