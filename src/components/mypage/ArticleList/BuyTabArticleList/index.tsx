// import { Divider } from '@offer-ui/react'
import type { ReactElement } from 'react'
// import { Fragment } from 'react'
import type { BuyTabArticleListProps } from './types'
// import { BuyTabArticle } from '@components/mypage/Article'

const BuyTabArticleList = ({
  // activityType,
  // articles,
  className
}: BuyTabArticleListProps): ReactElement => {
  return (
    <ul className={className}>
      {/* {articles.map((article, index) => {
        return (
          <Fragment key={article.id}>
            <BuyTabArticle activityType={activityType} {...article} />
            {index !== articles.length - 1 && <Divider size="bold" />}
          </Fragment>
        )
      })} */}
    </ul>
  )
}

export { BuyTabArticleList, BuyTabArticleListProps }
