import type { ModalProps } from '@offer-ui/react'

export type EditProfileForm = {
  image: { id: string; file?: File; url: string }
  nickname: string
}

export type EditProfileValidate = { isSuccess: boolean; message: string }

export type EditProfileModalProps = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  profile: EditProfileForm
  onConfirm(profile: EditProfileForm): void
}
