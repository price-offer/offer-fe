import type {
  ProductConditionCodes,
  TradeStatusCodes,
  TradeTypeCodes
} from './service'

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
export type PostDetail = {
  id: number
  title: string
  description: string
  thumbnailImageUrl: string
  imageUrls: string[]
  price: number
  location: string
  tradeType: TradeTypeCodes
  tradeStatus: TradeStatusCodes
  productCondition: ProductConditionCodes
  createdAt: string
  seller: {
    id: number
    profileImageUrl: string
    nickname: string
    offerLevel: number
  }
  category: {
    code: string
    name: string
    imageUrl: string
  }
  liked: true
  totalLikeCount: number
}
export type PostSummary = {
  id: number
  title: string
  price: number
  location: string
  thumbnailImageUrl: string
  liked: boolean
  tradeStatus: TradeStatusCodes
  likeCount: number
  createdAt: string
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
  id: number
  reviewer: ReviewerBrief
  score: number
  post: PostBrief
  content: string
  createdDate: string
}[]
export type ReviewerBrief = {
  id: number
  profileImageUrl: string
  nickname: string
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
  tradeType: TradeTypeCodes
  profileImageUrl: string
}
export type OfferSummaries = {
  offers: OfferSummary[]
  hasNext: boolean
}
export type OfferSummary = {
  offerId: number
  postId: number
  offerPrice: number
  thumbnailImageUrl: string
  tradeStatus: TradeStatusCodes
  createdAt: string
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
