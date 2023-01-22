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
export type TradeStatusCode = 4 | 8
export type TradeStatusName = '판매중' | '거래완료'
export interface TradeStatus {
  code: TradeStatusCode
  name: TradeStatusName
}
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
}
export interface PageInfo {
  currentPageNumber: number
  lastPageNumber: number
  sizePerPage: number
  totalElementCount: number
  isFirstPage: boolean
  isLastPage: boolean
}

/** offer */
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
interface ReviewsElement {
  id: number
  reviewer: Reviewer
  article: Article
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
export interface Article {
  id: number
  title: string
}
