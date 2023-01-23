import { Divider } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Fragment } from 'react'
import { SellTypeArticle } from '../../Article'
import type { ArticlesElement, TradeStatus } from '@types'

export interface SellTypeArticleListProps {
  articles: ArticlesElement[]
  className?: string
  hasToken: boolean
  onChangeTradeStatus(productId: number, status: TradeStatus): void
}

export const SellTypeArticleList = ({
  articles,
  hasToken,
  onChangeTradeStatus,
  className
}: SellTypeArticleListProps): ReactElement => {
  return (
    <ul className={className}>
      {articles.map((article, index) => {
        return (
          <Fragment key={article.id}>
            <SellTypeArticle
              {...article}
              hasToken={hasToken}
              onChangeTradeStatus={onChangeTradeStatus}
            />
            {index !== articles.length - 1 && <Divider size="bold" />}
          </Fragment>
        )
      })}
    </ul>
  )
}
