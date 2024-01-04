import type { ProductCondition, TradeStatusType, TradeType } from './service'

/** Common */
export type CommonCreation = {
  id: number
  createdAt: string
}
export type OptionShape = Readonly<{
  code: string
  name: string
}>

/** Post  */
export type SellerDetail = {
  id: number
  profileImageUrl: string
  nickname: string
  offerLevel: number
}

export type Category = {
  code: string
  name: string
  imageUrl: string
}

export type PostDetail = {
  id: number
  title: string
  description: string
  thumbnailImageUrl: string
  imageUrls: string[]
  price: number
  location: string
  tradeType: TradeType
  tradeStatus: TradeStatusType
  productCondition: ProductCondition
  createdAt: string
  seller: SellerDetail
  category: Category
  liked: boolean
  totalLikeCount: number
}
export type PostSummary = {
  id: number
  title: string
  price: number
  location: string
  thumbnailImageUrl: string
  liked: boolean
  tradeStatus: TradeStatusType
  likeCount: number
  createdAt: string
  seller: SellerDetail
  category: Category
  review: Review
  hasReview: boolean
}
export type PostSummaries = {
  posts: PostSummary[]
  hasNext: boolean
}

export type SortOptionsShape = OptionShape[]

/** Member */
export type MemberProfile = {
  id: number
  nickname: string
  profileImageUrl: string
  offerLevel: number
  sellingProductCount: number
  soldProductCount: number
  reviewCount: number
}

// TODO: scheme 확인 필요 MemberProfileRes로 노출되는 현상
export type MyProfile = MemberProfile & {
  likeProductCount: number
}

export type ImagesUpload = {
  imageUrls: string[]
}
export type ImageUpload = {
  imageUrl: string
}

/** Review */
export type ReviewInfo = {
  hasNext: boolean
  reviews: Review[]
}
export type Review = {
  id: number
  reviewTargetMember: ReviewTargetMember
  score: number
  post: PostBrief
  content: string
  createdDate: string
}
export type ReviewTargetMember = {
  id: number
  profileImageUrl: string
  nickname: string
  offerLevel: number
}
export type PostBrief = {
  id: number
  title: string
}

/** Offer */
export type Offers = {
  totalSize: number
  postId: number
  offers: Offer[]
  offerCountOfCurrentMember: number
  maximumOfferCount: number
}
export type Offer = {
  id: number
  offerer: Offerer
  price: number
  createdAt: string
}
export type Offerer = {
  id: number
  nickname: string
  location: string
  level: string
  tradeType: TradeType
  profileImageUrl: string
}
export type OfferSummaries = {
  offers: OfferSummary[]
  hasNext: boolean
}
export type OfferSummary = {
  offerId: number
  postId: number
  seller: SellerDetail
  title: string
  offerPrice: number
  thumbnailImageUrl: string
  tradeStatus: TradeStatusType
  createdAt: string
  reviewAvailable: boolean
  hasReview: boolean
  review: Review
}

/** Message */
export type MessageRoomInfo = {
  id: number
  partner: PartnerBrief
  post: PostBrief
  offerPrice: number
  lastContent: string
  notReadCnt: number
  lastSendTime: string
}
export type PartnerBrief = {
  id: number
  imageUrl: string
  nickname: string
}
export type MessageInfo = {
  content: string
  member: PartnerBrief
  sendTime: string
}

/** Auth  */
export type OauthLoginUrl = {
  url: string
}
