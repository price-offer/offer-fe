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
  tradeType = 'ALL',
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
        <Text color="grayScale70" styleType="caption01M" tag="p">
          {location}
          {isOfferProfile && ` · ${tradeType}`}
        </Text>
        {isOfferProfile && (
          <Text color="grayScale70" styleType="caption01M" tag="p">
            {date}
          </Text>
        )}
      </Styled.ProfileText>
    </Styled.UserProfile>
  )
}

export { UserProfile, UserProfileProps }
