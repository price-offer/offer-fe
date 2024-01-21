import { Avatar, Badge, Text } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { UserProfileProps } from './types'

const UserProfile = ({
  nickName,
  image = '',
  location,
  level,
  date = '',
  tradeType = '직거래/택배거래',
  type = 'basic'
}: UserProfileProps): ReactElement => {
  const isOfferProfile = type === 'offer'

  return (
    <Styled.UserProfile>
      <Avatar alt={`user-profile`} src={image} />
      <Styled.ProfileText>
        <Styled.UserName>
          <Text styleType="body02B" tag="p">
            {nickName}
          </Text>
          <Badge colorType="orange">
            Lv.
            {level}
          </Badge>
        </Styled.UserName>
        {isOfferProfile && (
          <>
            <Text color="grayScale70" styleType="caption01M" tag="p">
              {location}
              {` · ${tradeType}`}
            </Text>
            <Text color="grayScale70" styleType="caption01M" tag="p">
              {date}
            </Text>
          </>
        )}
      </Styled.ProfileText>
    </Styled.UserProfile>
  )
}

export { UserProfile, UserProfileProps }
