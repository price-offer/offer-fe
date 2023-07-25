/* eslint-disable no-console */
import styled from '@emotion/styled'
import type { ColorKeys } from '@offer-ui/react'
import { Divider, SelectBox } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { useEffect, useState, useCallback } from 'react'
import { getOnSaleArticles } from '@apis'
import { ProfileBox, Tabs, Tab, SaleTabArticleList } from '@components'
import { TRADE_STATUS } from '@constants'
import { myProfile } from '@mocks/fixture'
import type { ArticlesElement, TradeStatusCode } from '@types'
import { noop } from '@utils'

const sortItems = [
  {
    code: 'recently',
    name: '최신순'
  }
]

const tradeStatusList = TRADE_STATUS.filter(item => item.code !== 2)

export const SalePageContent = (): ReactElement => {
  const hasToken = true
  const [tradeStatusCode, setTradeStatusCode] = useState<TradeStatusCode>(4)
  const [articles, setArticles] = useState<ArticlesElement[]>([])

  const fetchArticles = useCallback(async (): Promise<void> => {
    const res = await getOnSaleArticles('sonny', tradeStatusCode)
    setArticles(res.elements)
  }, [tradeStatusCode])

  const handleTabClick = (newTradeStatusCode: TradeStatusCode) => () => {
    setTradeStatusCode(newTradeStatusCode)
  }

  useEffect(() => {
    fetchArticles()
  }, [fetchArticles])

  return (
    <StyledContentWrapper>
      <ProfileBox {...myProfile} />
      <StyledDivider size="bold" />
      <StyledUserProductsWrapper>
        <Tabs>
          <StyledSearchOptionsWrapper>
            <StyledTabsList>
              {tradeStatusList.map(tradeStatus => {
                const isCurrent = tradeStatus.code === tradeStatusCode

                return (
                  <StyledTab
                    key={tradeStatus.code}
                    onClick={handleTabClick(tradeStatus.code)}
                  >
                    <StyledStatusButtonLabel>
                      <StyledCircle isCurrent={isCurrent} />
                      <StyledStatusButton isCurrent={isCurrent}>
                        <StyledText isCurrent={isCurrent}>
                          {tradeStatus.name}
                        </StyledText>
                      </StyledStatusButton>
                      <StyledText color="grayScale50">1</StyledText>
                    </StyledStatusButtonLabel>
                  </StyledTab>
                )
              })}
            </StyledTabsList>
            <SelectBox
              colorType="none"
              items={sortItems}
              value="recently"
              onChange={noop}
            />
          </StyledSearchOptionsWrapper>
          <StyledProductListPanels>
            <Tabs.Panel>
              <SaleTabArticleList
                articles={articles}
                hasToken={hasToken}
                onChangeTradeStatus={noop}
              />
            </Tabs.Panel>
            <Tabs.Panel>
              <SaleTabArticleList
                articles={articles}
                hasToken={hasToken}
                onChangeTradeStatus={noop}
              />
            </Tabs.Panel>
          </StyledProductListPanels>
        </Tabs>
      </StyledUserProductsWrapper>
    </StyledContentWrapper>
  )
}

const StyledContentWrapper = styled.div`
  ${({ theme }): string => `
    display: flex;
    gap: 32px;

    ${theme.mediaQuery.tablet} {
      position: relative;
      flex-direction: column;
      gap: 0;
    }
  `}
`
const StyledSearchOptionsWrapper = styled.div`
  ${({ theme }): string => `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid ${theme.colors.grayScale10};

    ${theme.mediaQuery.tablet} {
      padding: 16px;
    }
  `}
`
const StyledTabsList = styled(Tabs.List)`
  display: flex;
  gap: 22px;
`
const StyledTab = styled(Tab)`
  border: none;

  background: transparent;
`
const StyledStatusButtonLabel = styled.label`
  display: flex;
  align-items: center;

  cursor: pointer;
`
const StyledCircle = styled.span<{ isCurrent: boolean }>`
  ${({ theme, isCurrent }): string => `
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background-color: ${
      isCurrent ? theme.colors.brandPrimary : theme.colors.grayScale50
    };
  `}
`
const StyledStatusButton = styled.button<{ isCurrent: boolean }>`
  ${({ theme }): string => `
    border: none;
    background: transparent;
    padding: 0;
    margin: 0 4px 0 8px;
    cursor: pointer;

    ${theme.mediaQuery.tablet} {
      margin: 0 4px;
    }
  `}
`
const StyledText = styled.span<{ isCurrent?: boolean; color?: ColorKeys }>`
  ${({ theme, isCurrent, color }): string => `
    ${theme.fonts.subtitle01B};
    color: ${
      color
        ? theme.colors[color]
        : isCurrent
        ? theme.colors.black
        : theme.colors.grayScale50
    };

    ${theme.mediaQuery.tablet} {
      ${theme.fonts.body02B};
    }
  `}
`
const StyledUserProductsWrapper = styled.div`
  ${({ theme }): string => `
    width: 892px;
    height: 855px;
    border: 1px solid ${theme.colors.grayScale10};
    border-bottom: none;

    ${theme.mediaQuery.tablet} {
      width: auto;
      border: none;
    }
  `}
`
const StyledProductListPanels = styled(Tabs.Panels)`
  ${({ theme }): string => `
    height: 780px;
    overflow-y: scroll;

    ${theme.mediaQuery.tablet} {
      height: auto;
      overflow-y: unset;
    }
  `}
`
const StyledDivider = styled(Divider)`
  ${({ theme }): string => `
    display: none;

    ${theme.mediaQuery.tablet} {
      display: block;
    }
  `}
`
