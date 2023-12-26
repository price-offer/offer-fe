import type { GetCategoriesRes } from '@apis/post'
import type { MyProfile } from '@types'

export const myProfile: MyProfile = {
  id: 1,
  nickname: 'string',
  profileImageUrl: 'https://avatars.githubusercontent.com/u/47546413?v=4',
  offerLevel: 1,
  sellingProductCount: 0,
  soldProductCount: 0,
  reviewCount: 0,
  likeProductCount: 0
}

export const categories: GetCategoriesRes = [
  {
    code: 'MEN_FASHION',
    name: '남성패션/잡화',
    imageUrl: ''
  },
  {
    code: 'WOMEN_FASHION',
    name: '여성패션/잡화',
    imageUrl: ''
  },
  {
    code: 'GAME',
    name: '게임',
    imageUrl: ''
  },
  {
    code: 'SPORTS',
    name: '스포츠/레저',
    imageUrl: ''
  },
  {
    code: 'TOY',
    name: '장난감/취미',
    imageUrl: ''
  },
  {
    code: 'DIGITAL',
    name: '디지털기기',
    imageUrl: ''
  },
  {
    code: 'CAR',
    name: '자동차/공구',
    imageUrl: ''
  },
  {
    code: 'APPLIANCE',
    name: '생활가전',
    imageUrl: ''
  },
  {
    code: 'FURNITURE',
    name: '가구/인테리어',
    imageUrl: ''
  },
  {
    code: 'BOOKS',
    name: '도서/티켓/음반',
    imageUrl: ''
  },
  {
    code: 'PET',
    name: '반려동물용품',
    imageUrl: ''
  },
  {
    code: 'OTHER',
    name: '기타 중고물품',
    imageUrl: ''
  }
]
