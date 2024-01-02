import styled from '@emotion/styled'
import { Badge } from '@offer-ui/react'

const UserProfile = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`
const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`
const UserName = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

const LevelBadge = styled(Badge)`
  height: fit-content;
`

export const Styled = {
  UserProfile,
  ProfileText,
  UserName,
  LevelBadge
}
