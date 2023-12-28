import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Modal, useMedia } from '@offer-ui/react'
import { useState, type ReactElement, useEffect } from 'react'
import {
  MessagePreview,
  Tabs,
  Tab,
  ChattingRoom,
  MessageBoxPlaceholder
} from '@components'
import { IMAGE } from '@constants'
import { useModal } from '@hooks'

type TabType = 'all' | 'buy' | 'sell'

const TABS = {
  all: '전체',
  buy: '구매',
  sell: '판매'
} as const

const TabKeys = Object.keys(TABS) as TabType[]
const TabEntries = Object.entries(TABS)

const MessageBoxPage = (): ReactElement => {
  const [tab, setTab] = useState<TabType>('all')
  const [roomId, setRoomId] = useState<number | null>(null)
  const { isOpen, openModal, closeModal } = useModal()
  const { desktop, mobile, tablet } = useMedia()

  const handleChangeTab = (currentIndex: number, nextIndex: number) => {
    const nextTab = TabKeys[nextIndex]

    setTab(nextTab)
  }

  const handleSelectRoom = (id: number) => {
    setRoomId(id)

    if (!desktop) {
      openModal()
    }
  }

  const handleCloseRoom = () => {
    setRoomId(null)

    if (!desktop) {
      closeModal()
    }
  }

  useEffect(() => {
    setRoomId(null)
  }, [desktop, tablet, mobile])

  return (
    <>
      <Page>
        <Container>
          <ListContainer>
            <ListHeader>
              <span>
                내 쪽지함 <i>{LIST_MOCK.length}</i>
              </span>
              <div>
                <Tabs onChange={handleChangeTab}>
                  <Tabs.List>
                    {TabEntries.map(([key, value]) => (
                      <Tab key={key}>
                        <TabButton isSelected={key === tab}>{value}</TabButton>
                      </Tab>
                    ))}
                  </Tabs.List>
                </Tabs>
              </div>
            </ListHeader>
            <MessageList>
              {LIST_MOCK.length > 0 ? (
                LIST_MOCK.map(({ id, ...messageInfo }) => (
                  <MessagePreview
                    key={id}
                    id={id}
                    isSelected={id === roomId}
                    onClick={handleSelectRoom}
                    {...messageInfo}
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
              <ChattingRoom id={roomId} onClose={handleCloseRoom} />
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
          <ChattingRoom id={roomId} onClose={handleCloseRoom} />
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

const LIST_MOCK = [
  {
    id: 1,
    userInfo: {
      id: 1,
      nickname: 'offerer',
      profileImageUrl: null
    },
    productInfo: {
      price: 123346,
      productImageUrl: null
    },
    latestTalk: {
      content:
        '구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ?',
      createdDate: '2시간 전'
    }
  },
  {
    id: 2,
    userInfo: {
      id: 1,
      nickname: 'offerer',
      profileImageUrl: null
    },
    productInfo: {
      price: 123346,
      productImageUrl: null
    },
    latestTalk: {
      content:
        '구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ?',
      createdDate: '2시간 전'
    }
  },
  {
    id: 3,
    userInfo: {
      id: 1,
      nickname: 'offerer',
      profileImageUrl: null
    },
    productInfo: {
      price: 123346,
      productImageUrl: null
    },
    latestTalk: {
      content:
        '구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ?',
      createdDate: '2시간 전'
    }
  },
  {
    id: 4,
    userInfo: {
      id: 1,
      nickname: 'offerer',
      profileImageUrl: null
    },
    productInfo: {
      price: 123346,
      productImageUrl: null
    },
    latestTalk: {
      content:
        '구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ?',
      createdDate: '2시간 전'
    }
  },
  {
    id: 5,
    userInfo: {
      id: 1,
      nickname: 'offerer',
      profileImageUrl: null
    },
    productInfo: {
      price: 123346,
      productImageUrl: null
    },
    latestTalk: {
      content:
        '구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ?',
      createdDate: '2시간 전'
    }
  },
  {
    id: 6,
    userInfo: {
      id: 1,
      nickname: 'offerer',
      profileImageUrl: null
    },
    productInfo: {
      price: 123346,
      productImageUrl: null
    },
    latestTalk: {
      content:
        '구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ?',
      createdDate: '2시간 전'
    }
  },
  {
    id: 7,
    userInfo: {
      id: 1,
      nickname: 'offerer',
      profileImageUrl: null
    },
    productInfo: {
      price: 123346,
      productImageUrl: null
    },
    latestTalk: {
      content:
        '구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ?',
      createdDate: '2시간 전'
    }
  },
  {
    id: 8,
    userInfo: {
      id: 1,
      nickname: 'offerer',
      profileImageUrl: null
    },
    productInfo: {
      price: 123346,
      productImageUrl: null
    },
    latestTalk: {
      content:
        '구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ?',
      createdDate: '2시간 전'
    }
  },
  {
    id: 9,
    userInfo: {
      id: 1,
      nickname: 'offerer',
      profileImageUrl: null
    },
    productInfo: {
      price: 123346,
      productImageUrl: null
    },
    latestTalk: {
      content:
        '구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ?',
      createdDate: '2시간 전'
    }
  },
  {
    id: 10,
    userInfo: {
      id: 1,
      nickname: 'offerer',
      profileImageUrl: null
    },
    productInfo: {
      price: 123346,
      productImageUrl: null
    },
    latestTalk: {
      content:
        '구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ? 구매 가능 할까요 ?',
      createdDate: '2시간 전'
    }
  }
]

export default MessageBoxPage
