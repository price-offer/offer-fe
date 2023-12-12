import type {
  PRODUCT_CONDITION,
  TRADE_TYPE,
  TRADE_STATUS
} from '@constants/app'

/** Member */
export type MemberProfile = {
  member: Member
  sellingArticleCount: number
  reviewCount: number
}
export type MyProfile = {
  member: Member
  sellingArticleCount: number
  likedArticleCount: number
  offerCount: number
  reviewCount: number
}
export type Member = {
  id: number
  offerLevel: number
  nickname: string
  profileImageUrl: string
  address: string
}

/** Article */
export type Article = {
  id: number
  author: Author
  title: string
  content: string
  category: Option
  tradeStatus: Option
  tradeArea: string
  productCondition: Option
  tradeMethod: Option
  quantity: number
  price: number
  mainImageUrl: string
  createdDate: string
  modifiedDate: string
  likeCount: number
  viewCount: number
  isLiked: boolean
}
export type Articles = {
  elements: ArticlesElement[]
  pageInfo: PageInfo
}
export type Author = {
  id: number
  email: string
  offerLevel: number
  nickname: string
  profileImageUrl: string
  address: string
}
export type Option = {
  code: number
  name: string
}
export type ArticlesElement = {
  id: number
  mainImageUrl: string
  title: string
  price: number
  tradeArea: string
  tradeStatus: TradeStatus
  createdDate: string
  modifiedDate: string
  isLiked: boolean
  likeCount: number
  isReviewed: boolean
  sellerNickName: string
}
export type PageInfo = {
  currentPageNumber: number
  lastPageNumber: number
  sizePerPage: number
  totalElementCount: number
  isFirstPage: boolean
  isLastPage: boolean
}

/** Trade Status */
export type TradeStatus = typeof TRADE_STATUS[number]
export type TradeStatusCodes = TradeStatus['code']
export type TradeStatusNames = TradeStatus['name']

/** Trade Method */
export type TradeType = typeof TRADE_TYPE[number]
export type TradeTypeCodes = TradeType['code']
export type TradeTypeNames = TradeType['name']

/** Product Status */
export type ProductCondition = typeof PRODUCT_CONDITION[number]
export type ProductConditionCodes = ProductCondition['code']
export type ProductConditionNames = ProductCondition['name']

/** Sort Type */
export type SortType = typeof PRODUCT_CONDITION[number]
export type SortTypeCodes = SortType['code']
export type SortTypeNames = SortType['name']

/** Categories */
export type Categories = typeof PRODUCT_CONDITION[number]
export type CategoryCodes = Categories['code']
export type CategoryNames = Categories['name']

/** Offer */
export type Offer = {
  offer: OfferInfo
  offerCountOfCurrentMember: number
}
export type Offers = {
  elements: OfferInfo[]
  pageInfo: PageInfo
  offerCountOfCurrentMember: number
}
export type Offerer = {
  id: number
  nickname: string
  address: string
  offerLevel: number
  profileImageUrl: string
}
export type OfferInfo = {
  id: number
  offerer: Offerer
  articleId: number
  price: number
  createdDate: string
  isSelected: boolean
}

/** Review */
export type Review = {
  review: ReviewInfo
}
export type Reviews = {
  elements: ReviewsElement[]
  pageInfo: PageInfo
}
export type ReviewInfo = {
  id: number
  reviewer: Reviewer
  article: Article
  score: number
  content: string
  createdDate: string
}
export type ReviewsElement = {
  id: number
  reviewer: Reviewer
  article: ReviewArticle
  score: number
  content: string
  isWritingAvailableFromCurrentMember?: boolean
  createdDate: string
}
export type Reviewer = {
  id: number
  profileImageUrl: string
  nickname: string
  offerLevel: number
}
export type ReviewArticle = {
  id: number
  title: string
}
