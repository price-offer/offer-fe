import { IconButton, Avatar, Modal, Input, Button, Text } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Styled } from './styled'

export const EditProfileModal = (): ReactElement => (
  <Modal isOpen>
    <Styled.Header>
      <Styled.CloseButtonWrapper>
        <IconButton color="grayScale30" icon="close" size={24} />
      </Styled.CloseButtonWrapper>
      <p>프로필 수정</p>
    </Styled.Header>
    <Styled.Body>
      <Styled.UploaderWrapper>
        <Avatar alt="" size="large" src="" />
      </Styled.UploaderWrapper>
      <Styled.EditNickName>
        <Text color="grayScale70" styleType="body01M" tag="p">
          닉네임
        </Text>
        <Input placeholder="닉네임을 입력해 주세요." />
        <Text color="grayScale50" styleType="caption01M" tag="p">
          0/20
        </Text>
        <Styled.DuplicateButton size="small" styleType="outline">
          중복확인
        </Styled.DuplicateButton>
      </Styled.EditNickName>
    </Styled.Body>
    <div>
      <Button size="large">저장</Button>
    </div>
  </Modal>
)
