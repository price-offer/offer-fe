import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Modal, useMedia } from '@offer-ui/react'
import type { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useState, type ReactElement, useEffect } from 'react'
import { toQueryString } from '@utils/format'
import { useGetMessageRoomsQuery } from '@apis'
import {
  MessagePreview,
  Tabs,
  Tab,
  ChattingRoom,
  MessageBoxPlaceholder
} from '@components'
import { IMAGE, MESSAGE_SORT_OPTIONS } from '@constants'
import { useModal } from '@hooks'
import type { MessageSortTypeCodes } from '@types'

type RoomId = number | null
type Props = {
  roomId: RoomId
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query
}) => ({
  props: {
    roomId: query.roomId ? Number(query.roomId) : null
  }
})

const MessageBoxPage = ({ roomId: defaultRoomId }: Props): ReactElement => {
  const [sortType, setSortType] = useState<MessageSortTypeCodes>('ALL')
  const getMessageRoomsQuery = useGetMessageRoomsQuery({
    page: 0,
    sort: sortType
  })

  const [roomId, setRoomId] = useState<RoomId>(defaultRoomId)
  const router = useRouter()
  const { isOpen, openModal, closeModal } = useModal()
  const { desktop, mobile, tablet } = useMedia()

  const messageList = getMessageRoomsQuery.data || []
  const messagesCount = messageList.length

  const handleChangeSortType = (currentIndex: number, nextIndex: number) => {
    const { code } = MESSAGE_SORT_OPTIONS[nextIndex]

    setSortType(code)
  }

  const handleSelectRoom = (id: number) => {
    setRoomId(id)

    router.push(
      `/messagebox${toQueryString({
        roomId: String(id)
      })}`
    )

    if (!desktop) {
      openModal()
    }
  }

  const handleCloseRoom = () => {
    setRoomId(null)

    getMessageRoomsQuery.refetch()
    router.push(`/messagebox`)

    if (!desktop) {
      closeModal()
    }
  }

  useEffect(() => {
    if (desktop) {
      closeModal()
      return
    }

    if (roomId) {
      openModal()
    }
  }, [desktop, tablet, mobile])

  return (
    <>
      <Page>
        <Container>
          <ListContainer>
            <ListHeader>
              <span>
                내 쪽지함 <i>{messagesCount}</i>
              </span>
              <div>
                <Tabs onChange={handleChangeSortType}>
                  <Tabs.List>
                    {MESSAGE_SORT_OPTIONS.map(({ code, name }) => (
                      <Tab key={code}>
                        <TabButton isSelected={code === sortType}>
                          {name}
                        </TabButton>
                      </Tab>
                    ))}
                  </Tabs.List>
                </Tabs>
              </div>
            </ListHeader>
            <MessageList>
              {messagesCount > 0 ? (
                messageList.map(({ id, post, ...resInfo }) => (
                  <MessagePreview
                    key={id}
                    id={id}
                    isSelected={id === roomId}
                    post={post}
                    onClick={() => handleSelectRoom(id)}
                    {...resInfo}
                  />
                ))
              ) : (
                <MessageBoxPlaceholder
                  image={{
                    url: IMAGE.MAIL,
                    width: '90px',
                    height: '90px'
                  }}
                  message={`쪽지 내역이 없어요.\n구매하고 싶은 상품에 가격을 제안해보세요.`}
                />
              )}
            </MessageList>
          </ListContainer>
          <DetailContainer>
            {roomId ? (
              <ChattingRoom roomId={roomId} onClose={handleCloseRoom} />
            ) : (
              <MessageBoxPlaceholder
                image={{
                  url: IMAGE.MESSAGE,
                  width: '110px',
                  height: '90px'
                }}
                message="쪽지할 상대를 선택해주세요."
              />
            )}
          </DetailContainer>
        </Container>
      </Page>
      {roomId && (
        <ChattingRoomModal isOpen={isOpen}>
          <ChattingRoom roomId={roomId} onClose={handleCloseRoom} />
        </ChattingRoomModal>
      )}
    </>
  )
}

const ChattingRoomModal = styled(Modal)`
  width: 100vw;
  height: 100vh;
  padding: 0;
`

const Page = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;

  width: 100vw;
  height: calc(100vh - 67px);
`

const Container = styled.div`
  display: flex;

  width: 100%;
  max-width: 1200px;
  border: 1px solid ${({ theme }) => theme.colors.grayScale10};
`

const ListContainer = styled.div`
  width: 100%;
  max-width: 512px;

  ${({ theme }) => css`
    ${theme.mediaQuery.tablet} {
      max-width: none;
    }

    ${theme.mediaQuery.mobile} {
      max-width: none;
    }
  `}
`

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 20px;

  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.grayScale10};

    ${theme.fonts.headline02B}

    ${theme.mediaQuery.tablet} {
      ${theme.fonts.subtitle01B}
    }

    ${theme.mediaQuery.mobile} {
      ${theme.fonts.subtitle01B}
    }
  `}

  i {
    margin-left: 8px;

    color: ${({ theme }) => theme.colors.grayScale50};
  }
`

const TabButton = styled.button<{ isSelected: boolean }>`
  border: none;

  background-color: transparent;

  cursor: pointer;

  ::before {
    content: '●';

    margin-right: 8px;

    color: ${({ theme, isSelected }) =>
      isSelected ? theme.colors.brandPrimary : 'inherit'};
  }

  ${({ theme, isSelected }) => css`
    color: ${isSelected ? theme.colors.grayScale90 : theme.colors.grayScale50};

    ${theme.fonts.subtitle01B};

    ${theme.mediaQuery.tablet} {
      ${theme.fonts.body02B}
    }

    ${theme.mediaQuery.mobile} {
      ${theme.fonts.body02B}
    }
  `}
`

const MessageList = styled.ul`
  overflow: scroll;

  height: 100%;
`

const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  ${({ theme }) => css`
    border-left: 1px solid ${theme.colors.grayScale10};

    background-color: ${theme.colors.bgGray01};

    ${theme.mediaQuery.tablet} {
      display: none;
    }

    ${theme.mediaQuery.mobile} {
      display: none;
    }
  `}
`

export default MessageBoxPage
