import { Divider } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Fragment } from 'react'
import { SellTabArticle } from '../../Article'
import type { ArticlesElement, TradeStatus } from '@types'

export interface SellTabArticleListProps {
  articles: ArticlesElement[]
  className?: string
  hasToken: boolean
  onChangeTradeStatus(productId: number, status: TradeStatus): void
}

export const SellTabArticleList = ({
  articles,
  hasToken,
  onChangeTradeStatus,
  className
}: SellTabArticleListProps): ReactElement => {
  return (
    <ul className={className}>
      {articles.map((article, index) => {
        return (
          <Fragment key={article.id}>
            <SellTabArticle
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
