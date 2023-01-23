import type { MyProfile, MemberProfile, Articles } from '@types'

export const myProfile: MyProfile = {
  member: {
    id: 1,
    offerLevel: 1,
    nickname: 'my profile',
    profileImageUrl: 'https://avatars.githubusercontent.com/u/47546413?v=4',
    address: '서울시'
  },
  sellingArticleCount: 0,
  likedArticleCount: 0,
  offerCount: 0,
  reviewCount: 0
}

type MemberProfileList = {
  [key in string]: MemberProfile
}

export const memberProfileList: MemberProfileList = {
  1: {
    member: {
      id: 1,
      offerLevel: 1,
      nickname: 'my profile',
      profileImageUrl: 'https://avatars.githubusercontent.com/u/47546413?v=4',
      address: '서울시'
    },
    sellingArticleCount: 0,
    reviewCount: 0
  },
  2: {
    member: {
      id: 2,
      offerLevel: 1,
      nickname: 'other user',
      profileImageUrl: '',
      address: '서울시'
    },
    sellingArticleCount: 0,
    reviewCount: 0
  }
}

export const articles: Articles = {
  elements: [
    {
      id: 4,
      mainImageUrl: 'string',
      title: 'string',
      price: 36500,
      tradeArea: '서울시 강남구',
      tradeStatus: {
        code: 4,
        name: '판매중'
      },
      createdDate: '2021-12-10T14:25:30',
      modifiedDate: '2021-12-10T14:25:30',
      isLiked: false,
      likeCount: 0,
      isReviewed: false,
      sellerNickName: 'hypeboy'
    },
    {
      id: 2,
      mainImageUrl: 'string',
      title: 'string',
      price: 8000,
      tradeArea: '서울시 강남구',
      tradeStatus: {
        code: 4,
        name: '판매중'
      },
      createdDate: '2021-12-10T14:23:53',
      modifiedDate: '2021-12-10T14:23:53',
      isLiked: false,
      likeCount: 0,
      isReviewed: false,
      sellerNickName: 'hypeboy'
    }
  ],
  pageInfo: {
    currentPageNumber: 1,
    lastPageNumber: 1,
    sizePerPage: 2,
    totalElementCount: 2,
    isFirstPage: true,
    isLastPage: true
  }
}
