import {
  IconButton,
  Avatar,
  Modal,
  Button,
  Text,
  Icon,
  useImageUploader
} from '@offer-ui/react'
import type { ChangeEventHandler, ReactElement } from 'react'
import { useState } from 'react'
import { Styled } from './styled'
import type { EditProfileForm, EditProfileModalProps } from './types'

const NICK_NAME_MAX_LENGTH = 20

const initialProfileForm = {
  image: { id: '', url: '', file: undefined },
  nickname: ''
}

export const EditProfileModal = ({
  isOpen,
  validate,
  onValidateNickname,
  onClose,
  onConfirm,
  onChangeImage
}: EditProfileModalProps): ReactElement => {
  const [profileForm, setProfileForm] =
    useState<EditProfileForm>(initialProfileForm)
  const { uploaderRef, openUploader, changeImage } = useImageUploader({
    onChange: async image => {
      const uploadedImage = await onChangeImage(image)
      setProfileForm({ ...profileForm, image: uploadedImage })
    }
  })

  const handleChangeNickname: ChangeEventHandler<HTMLInputElement> = e => {
    setProfileForm({ ...profileForm, nickname: e.target.value })
  }
  const handleClickDuplicateButton = () => {
    onValidateNickname(profileForm.nickname.trim())
  }
  const handleConfirm = () => {
    onConfirm(profileForm)
  }

  const handleClose = () => {
    onClose?.()
    setProfileForm(initialProfileForm)
  }

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
          <input
            maxLength={NICK_NAME_MAX_LENGTH}
            placeholder="닉네임을 입력해 주세요."
            value={profileForm.nickname}
            onChange={handleChangeNickname}
          />
          <Text color="grayScale50" styleType="caption01M" tag="p">
            {profileForm.nickname.length}/{NICK_NAME_MAX_LENGTH}
          </Text>
          {!!validate.message && (
            <Text
              color={validate.isSuccess ? 'actSuccess' : 'actError'}
              styleType="caption01M">
              {validate.message}
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
        <Button
          disabled={!validate.isSuccess}
          size="large"
          onClick={handleConfirm}>
          저장
        </Button>
      </div>
    </Modal>
  )
}
