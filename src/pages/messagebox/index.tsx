import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useState, type ReactElement } from 'react'
import { MessagePreview, Tabs, Tab, ChattingRoom, NoContent } from '@components'

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

  const handleChangeTab = (currentIndex: number, nextIndex: number) => {
    const nextTab = TabKeys[nextIndex]

    setTab(nextTab)
  }

  const handleSelectRoom = (id: number) => {
    setRoomId(id)
  }

  return (
    <Page>
      <Container>
        <ListContainer>
          <ListHeader>
            <span>
              내 쪽지함 <i>{LIST_MOCK.length}</i>
            </span>
            <div>
              <Tabs onChange={handleChangeTab}>
                {TabEntries.map(([key, value]) => (
                  <Tab key={key}>
                    <TabButton isSelected={key === tab}>{value}</TabButton>
                  </Tab>
                ))}
              </Tabs>
            </div>
          </ListHeader>
          <MessageList>
            <NoContent
              hasContent={LIST_MOCK.length > 0}
              image={{
                url: '/images/mail.png',
                width: '90px',
                height: '90px'
              }}
              message={`쪽지 내역이 없어요.\n구매하고 싶은 상품에 가격을 제안해보세요.`}>
              {LIST_MOCK.map(({ id, ...messageInfo }) => (
                <MessagePreview
                  key={id}
                  id={id}
                  onClick={handleSelectRoom}
                  {...messageInfo}
                />
              ))}
            </NoContent>
          </MessageList>
        </ListContainer>
        <DetailContainer>
          <NoContent
            hasContent={!!roomId}
            image={{
              url: '/images/message.svg',
              width: '110px',
              height: '90px'
            }}
            message="쪽지할 상대를 선택해주세요.">
            {roomId && <ChattingRoom id={roomId} />}
          </NoContent>
        </DetailContainer>
      </Container>
    </Page>
  )
}

const Page = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;

  width: 100vw;
  height: 100vh;
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
`

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 20px;

  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.grayScale10};

    ${theme.fonts.headline02B}
  `}

  i {
    margin-left: 8px;

    color: ${({ theme }) => theme.colors.grayScale50};
  }
`

const TabButton = styled.button<{ isSelected: boolean }>`
  border: none;

  background-color: transparent;

  ${({ theme, isSelected }) => css`
    color: ${isSelected ? theme.colors.grayScale90 : theme.colors.grayScale50};

    ${theme.fonts.subtitle01B};
  `}

  cursor:pointer;

  ::before {
    content: '●';

    margin-right: 8px;

    color: ${({ theme, isSelected }) =>
      isSelected ? theme.colors.brandPrimary : 'inherit'};
  }
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
