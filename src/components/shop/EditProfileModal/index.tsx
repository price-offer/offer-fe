import {
  IconButton,
  Avatar,
  Modal,
  Button,
  Text,
  Icon,
  useImageUploader,
  Input
} from '@offer-ui/react'
import type { ChangeEventHandler, ReactElement } from 'react'
import { useEffect, useState } from 'react'
import { Styled } from './styled'
import type { EditProfileForm, EditProfileModalProps } from './types'
import { useValidateNickname } from '@hooks/useValidateNickname'
import { useCreateUploadImagesMutation } from '@apis'

const NICK_NAME_MAX_LENGTH = 20

const initialProfileForm = {
  image: { id: '', url: '', file: undefined },
  nickname: ''
}

const initialNickNameValidate = {
  isSuccess: false,
  message: ''
}

export const EditProfileModal = ({
  isOpen,
  profile,
  onClose,
  onConfirm
}: EditProfileModalProps): ReactElement => {
  const [profileForm, setProfileForm] = useState<EditProfileForm>(profile)
  const [nickNameValidate, setNickNameValidate] = useState(
    initialNickNameValidate
  )
  const validateNickname = useValidateNickname()
  const createUploadImage = useCreateUploadImagesMutation()

  const handleChangeProfileImage = async (
    image: EditProfileForm['image']
  ): Promise<void> => {
    if (!image.file) {
      return
    }

    const imageFormData = new FormData()
    imageFormData.append('files', image.file)
    const { imageUrls } = await createUploadImage.mutateAsync(imageFormData)

    setProfileForm(prev => ({
      ...prev,
      image: { id: image.id, file: image.file, url: imageUrls[0] }
    }))
  }

  const { uploaderRef, openUploader, changeImage } = useImageUploader({
    onChange: handleChangeProfileImage
  })

  const canEdit = nickNameValidate.isSuccess || profileForm.image.file

  const handleChangeNickname: ChangeEventHandler<HTMLInputElement> = e => {
    setProfileForm({ ...profileForm, nickname: e.target.value })
  }

  const handleClickDuplicateButton = async () => {
    const validate = await validateNickname(profileForm.nickname.trim())

    setNickNameValidate(validate)
  }

  const handleConfirm = () => {
    onConfirm(profileForm)
  }

  const handleClose = () => {
    onClose?.()
    setProfileForm(initialProfileForm)
    setNickNameValidate(initialNickNameValidate)
  }

  useEffect(() => {
    setProfileForm(profile)
  }, [profile])

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Styled.Header>
        <Styled.CloseButtonWrapper>
          <IconButton
            color="grayScale30"
            icon="close"
            size={24}
            onClick={handleClose}
          />
        </Styled.CloseButtonWrapper>
        <p>프로필 수정</p>
      </Styled.Header>
      <Styled.Body>
        <Styled.UploaderWrapper>
          <Styled.AvatarWrapper onClick={openUploader}>
            <Avatar alt="" size="large" src={profileForm.image.url} />
            <Styled.CameraIconButton>
              <Icon color="white" size={12} type="camera" />
            </Styled.CameraIconButton>
          </Styled.AvatarWrapper>
          <Styled.UploaderInput
            ref={uploaderRef}
            accept="image/jpeg, image/png"
            type="file"
            onChange={changeImage}
          />
        </Styled.UploaderWrapper>
        <Styled.EditNickName>
          <Text color="grayScale70" styleType="body01M" tag="p">
            닉네임
          </Text>
          <Input
            maxLength={NICK_NAME_MAX_LENGTH}
            placeholder="닉네임을 입력해 주세요."
            value={profileForm.nickname}
            onChange={handleChangeNickname}
          />
          <Text color="grayScale50" styleType="caption01M" tag="p">
            {profileForm.nickname.length}/{NICK_NAME_MAX_LENGTH}
          </Text>
          {!!nickNameValidate.message && (
            <Text
              color={nickNameValidate.isSuccess ? 'actSuccess' : 'actError'}
              styleType="caption01M">
              {nickNameValidate.message}
            </Text>
          )}
          <Styled.DuplicateButton
            size="small"
            styleType="outline"
            onClick={handleClickDuplicateButton}>
            중복확인
          </Styled.DuplicateButton>
        </Styled.EditNickName>
      </Styled.Body>
      <div>
        <Button disabled={!canEdit} size="large" onClick={handleConfirm}>
          저장
        </Button>
      </div>
    </Modal>
  )
}
