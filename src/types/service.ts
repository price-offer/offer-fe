/** Member */
export interface MemberProfile {
  member: Member
  sellingArticleCount: number
  reviewCount: number
}
export interface MyProfile {
  member: Member
  sellingArticleCount: number
  likedArticleCount: number
  offerCount: number
  reviewCount: number
}
export interface Member {
  id: number
  offerLevel: number
  nickname: string
  profileImageUrl: string
  address: string
}

/** Article */
export interface Article {
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
export interface Articles {
  elements: ArticlesElement[]
  pageInfo: PageInfo
}
export interface Author {
  id: number
  email: string
  offerLevel: number
  nickname: string
  profileImageUrl: string
  address: string
}
export interface Option {
  code: number
  name: string
}
/** Trade Status */
export interface TradeStatusOnReserve {
  code: 2
  name: '예약중'
}
export interface TradeStatusOnSale {
  code: 4
  name: '판매중'
}
export interface TradeStatusOnSoldOut {
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
export interface TradeMethodOnDirect {
  code: 2
  name: '직거래'
}
export interface TradeMethodOnDelivery {
  code: 4
  name: '택배거래'
}
export interface TradeMethodOnAny {
  code: 8
  name: '상관없음'
}
export type TradeMethodCode = 2 | 4 | 8
export type TradeMethodName = '직거래' | '택배거래' | '상관없음'
export type TradeMethod =
  | TradeMethodOnDirect
  | TradeMethodOnDelivery
  | TradeMethodOnAny

/** Product Status */
export interface ProductStatusOnNew {
  code: 2
  name: '새상품'
}
export interface ProductStatusOnOld {
  code: 4
  name: '중고상품'
}
export type ProductStatusCode = 2 | 4
export type ProductStatusName = '새상품' | '중고상품'
export type ProductStatus = ProductStatusOnNew | ProductStatusOnOld

export interface ArticlesElement {
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
export interface PageInfo {
  currentPageNumber: number
  lastPageNumber: number
  sizePerPage: number
  totalElementCount: number
  isFirstPage: boolean
  isLastPage: boolean
}

/** Offer */
export interface Offer {
  offer: OfferInfo
  offerCountOfCurrentMember: number
}
export interface Offers {
  elements: OfferInfo[]
  pageInfo: PageInfo
  offerCountOfCurrentMember: number
}
export interface Offerer {
  id: number
  nickname: string
  address: string
  offerLevel: number
  profileImageUrl: string
}
export interface OfferInfo {
  id: number
  offerer: Offerer
  articleId: number
  price: number
  createdDate: string
  isSelected: boolean
}

/** Review */
export interface Review {
  review: ReviewInfo
}
export interface Reviews {
  elements: ReviewsElement[]
  pageInfo: PageInfo
}
export interface ReviewInfo {
  id: number
  reviewer: Reviewer
  article: Article
  score: number
  content: string
  createdDate: string
}
export interface ReviewsElement {
  id: number
  reviewer: Reviewer
  article: ReviewArticle
  score: number
  content: string
  isWritingAvailableFromCurrentMember?: boolean
  createdDate: string
}
export interface Reviewer {
  id: number
  profileImageUrl: string
  nickname: string
  offerLevel: number
}
export interface ReviewArticle {
  id: number
  title: string
}
