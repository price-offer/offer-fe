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
  productStatus: Option
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
/** Trade Status */
export type TradeStatusOnReserve = {
  code: 2
  name: '예약중'
}
export type TradeStatusOnSale = {
  code: 4
  name: '판매중'
}
export type TradeStatusOnSoldOut = {
  code: 8
  name: '거래완료'
}
export type TradeStatusCode = 2 | 4 | 8
export type TradeStatusName = '예약중' | '판매중' | '거래완료'
export type TradeStatus =
  | TradeStatusOnReserve
  | TradeStatusOnSale
  | TradeStatusOnSoldOut

/** Trade Method */
export type TradeMethodOnDirect = {
  code: 2
  name: '직거래'
}
export type TradeMethodOnDelivery = {
  code: 4
  name: '택배거래'
}
export type TradeMethodOnAny = {
  code: 8
  name: '직거래/택배거래'
}
export type TradeMethodCode = 2 | 4 | 8
export type TradeMethodName = '직거래' | '택배거래' | '직거래/택배거래'
export type TradeMethod =
  | TradeMethodOnDirect
  | TradeMethodOnDelivery
  | TradeMethodOnAny

/** Product Status */
export type ProductStatusOnNew = {
  code: 2
  name: '새상품'
}
export type ProductStatusOnOld = {
  code: 4
  name: '중고상품'
}
export type ProductStatusCode = 2 | 4
export type ProductStatusName = '새상품' | '중고상품'
export type ProductStatus = ProductStatusOnNew | ProductStatusOnOld

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
