import { Divider } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Fragment } from 'react'
import { BuyTypeArticle } from '../../Article'
import type { TradeBuyActivityType } from '@constants'
import type { ArticlesElement } from '@types'

export interface BuyTypeArticleListProps {
  activityType: TradeBuyActivityType
  articles: ArticlesElement[]
  className?: string
}

export const BuyTypeArticleList = ({
  activityType,
  articles,
  className
}: BuyTypeArticleListProps): ReactElement => {
  return (
    <ul className={className}>
      {articles.map((article, index) => {
        return (
          <Fragment key={article.id}>
            <BuyTypeArticle activityType={activityType} {...article} />
            {index !== articles.length - 1 && <Divider size="bold" />}
          </Fragment>
        )
      })}
    </ul>
  )
}
