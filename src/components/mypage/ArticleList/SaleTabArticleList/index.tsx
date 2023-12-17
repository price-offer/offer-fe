// import { Divider } from '@offer-ui/react'
import type { ReactElement } from 'react'
// import { Fragment } from 'react'
import type { SaleTabArticleListProps } from './types'
// import { SaleTabArticle } from '@components/mypage/Article'

const SaleTabArticleList = ({
  // articles,
  // hasToken,
  // onChangeTradeStatus,
  className
}: SaleTabArticleListProps): ReactElement => {
  return (
    <ul className={className}>
      {/* {articles.map((article, index) => {
        return (
          <Fragment key={article.id}>
            <SaleTabArticle
              {...article}
              hasToken={hasToken}
              onChangeTradeStatus={onChangeTradeStatus}
            />
            {index !== articles.length - 1 && <Divider size="bold" />}
          </Fragment>
        )
      })} */}
    </ul>
  )
}

export { SaleTabArticleList, SaleTabArticleListProps }
