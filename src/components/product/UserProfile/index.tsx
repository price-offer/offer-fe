import styled from '@emotion/styled'
import { Avatar, Badge, Text } from '@offer-ui/react'
import type { ReactElement } from 'react'

export const TRANSACTION_TYPE = {
  all: '직거래/택배거래',
  direct: '직거래',
  parcel: '택배거래'
} as const

type TransactionType = keyof typeof TRANSACTION_TYPE
export interface UserProfileProps {
  image?: string
  nickName: string
  location: string
  type: 'offer' | 'basic'
  level: number
  date?: string
  transactionType?: TransactionType
}

export const UserProfile = ({
  nickName,
  image = '',
  location,
  level,
  date = '',
  transactionType = 'all',
  type = 'basic'
}: UserProfileProps): ReactElement => {
  const isOfferProfile = type === 'offer'

  return (
    <StyledUserProfile>
      <Avatar alt={`user-profile`} src={image} />
      <StyledProfileText>
        <StyledUserName>
          <Text styleType="body02B" tag="p">
            {nickName}
          </Text>
          <Badge colorType="orange">
            Lv.
            {level}
          </Badge>
        </StyledUserName>
        <Text color="grayScale70" styleType="caption01M" tag="p">
          {location}
          {isOfferProfile && ` · ${TRANSACTION_TYPE[transactionType]}`}
        </Text>
        {isOfferProfile && (
          <Text color="grayScale70" styleType="caption01M" tag="p">
            {date}
          </Text>
        )}
      </StyledProfileText>
    </StyledUserProfile>
  )
}

const StyledUserProfile = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`
const StyledProfileText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`
const StyledUserName = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`
