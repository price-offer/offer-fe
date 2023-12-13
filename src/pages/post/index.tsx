import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  // ImageUploader,
  Input,
  SelectBox,
  Text,
  Radio,
  TextArea,
  Button,
  Divider
} from '@offer-ui/react'
import type {
  ImageInfo,
  // UploaderOnChangeHandler,
  SelectOnChangeHandler,
  InputProps
} from '@offer-ui/react'
import { useRouter } from 'next/router'
import type { ReactElement, ChangeEventHandler } from 'react'
import { useState } from 'react'
import { useGetCategoriesQuery, usePostProductMutation } from '@apis/post'
import { localeCurrencyToNumber } from '@utils/format'
import { PostForm } from '@components'
import { TRADE_TYPE, PRODUCT_CONDITION } from '@constants'
import { useResponsive } from '@hooks'
import type { ProductConditionCodes, TradeTypeCodes } from '@types'

type PostFormStatus = {
  title: string
  imageInfos: ImageInfo[]
  category: string
  price: string
  location: string
  productCondition: ProductConditionCodes | ''
  tradeType: TradeTypeCodes | ''
  description: string
}

type HandleUpdatePostForm = ChangeEventHandler<
  HTMLTextAreaElement | HTMLInputElement | HTMLFormElement
>

const MOCK_IMAGE_INFOS: ImageInfo[] = Array.from({ length: 4 }).map(
  (_, idx) => ({
    isRepresent: idx === 0,
    id: String(idx),
    url: 'https://picsum.photos/200/300'
  })
)

const PostPage = (): ReactElement => {
  const { mutateAsync: postProduct } = usePostProductMutation()
  const { data: categoriesData } = useGetCategoriesQuery()
  const router = useRouter()
  const [postForm, setPostForm] = useState<PostFormStatus>({
    imageInfos: MOCK_IMAGE_INFOS,
    title: '',
    category: '',
    location: '',
    productCondition: '',
    tradeType: '',
    description: '',
    price: ''
  })

  const InputSize = useResponsive<InputProps, 'width'>({
    desktop: '278px',
    tablet: '100%'
  })

  const isCompleteForm = Object.values(postForm)
    .map(value => Boolean(value))
    .reduce((prev, cur) => prev && cur, true)

  const handleUpdateCategory: SelectOnChangeHandler = ({ code }) => {
    setPostForm({
      ...postForm,
      category: code
    })
  }

  // const handleUpdateImageInfos: UploaderOnChangeHandler = ({
  //   images
  // }): void => {
  //   setPostForm({
  //     ...postForm,
  //     imageInfos: images
  //   })
  // }

  const handleUpdatePostForm: HandleUpdatePostForm = (e): void => {
    const { name, value } = e.target

    setPostForm({
      ...postForm,
      [name]: value
    })
  }

  const handlePostProduct = async () => {
    const { imageInfos, price, ...restInfos } = postForm
    const imageUrls = imageInfos.map(({ url }) => url)

    const res = await postProduct({
      ...restInfos,
      imageUrls,
      price: localeCurrencyToNumber(price),
      thumbnailImageUrl: imageUrls[0] || ''
    })

    router.push(`/product/${res.id}`)
  }

  return (
    <StyledPostPage>
      <StyledSellText styleType="headline02B" tag="p">
        판매하기
      </StyledSellText>
      <StyledFormWrapper>
        <StyledPostingHeader>
          <StyledTitleWrapper>
            <StyledTitleInput
              maxLength={40}
              name="title"
              placeholder="제목을 입력해주세요(40자 이내)"
              styleType="edit"
              onChange={handleUpdatePostForm}
            />
            <StyledTitleLength styleType="subtitle01M">
              {postForm.title.length}/40
            </StyledTitleLength>
          </StyledTitleWrapper>
          <div>
            {/* <ImageUploader
              images={postForm.imageInfos || []}
              onChange={handleUpdateImageInfos}
            /> */}
          </div>
        </StyledPostingHeader>
        <StyledDivider gap={20} />
        <Text styleType="headline02B" tag="p">
          필수 입력 정보
          <StyledRequiredMark color="brandPrimary" styleType="headline02B">
            *
          </StyledRequiredMark>
        </Text>
        <StyledPostForms>
          <PostForm label="카테고리">
            <SelectBox
              items={categoriesData}
              placeholder="선택"
              size="small"
              onChange={handleUpdateCategory}
            />
          </PostForm>
          <PostForm label="시작가">
            <Input
              isPrice
              name="price"
              placeholder="시작가를 입력하세요"
              width={InputSize}
              onChange={handleUpdatePostForm}
            />
          </PostForm>
          <PostForm label="거래 지역">
            <Input
              name="location"
              placeholder="ex. 동작구 사당동"
              width={InputSize}
              onChange={handleUpdatePostForm}
            />
          </PostForm>
          <StyledRadioPostForm label="상품 상태">
            <StyledRadio
              direction="horizontal"
              formName="productCondition"
              items={PRODUCT_CONDITION}
              onChange={handleUpdatePostForm}
            />
          </StyledRadioPostForm>
          <StyledRadioPostForm label="거래 방법">
            <StyledRadio
              direction="horizontal"
              formName="tradeType"
              items={TRADE_TYPE}
              onChange={handleUpdatePostForm}
            />
          </StyledRadioPostForm>
        </StyledPostForms>
        <StyledDivider gap={20} />
        <StyledTextareaWrapper>
          <Text color="grayScale70" styleType="body01M">
            상품 설명
          </Text>
          <StyledTextarea name="description" onChange={handleUpdatePostForm} />
        </StyledTextareaWrapper>
      </StyledFormWrapper>
      <StyledButtonWrapper>
        <Button
          disabled={!isCompleteForm}
          styleType="solidPrimary"
          onClick={handlePostProduct}>
          확인
        </Button>
      </StyledButtonWrapper>
    </StyledPostPage>
  )
}

const StyledRadioPostForm = styled(PostForm)`
  ${({ theme }): string => `
    ${theme.mediaQuery.mobile} {
      align-items: start;
    }
  `}
`

const StyledButtonWrapper = styled.div`
  ${({ theme }): string => `
    padding: 12px 0;
    border-top: solid 1px ${theme.colors.grayScale10};

    ${theme.mediaQuery.tablet} {
      padding: 12px 16px;
    }

    ${theme.mediaQuery.mobile} {
      padding: 12px 16px;
    }
  `}
`

const StyledRequiredMark = styled(Text)`
  margin-left: 5px;
`
const StyledSellText = styled(Text)`
  ${({ theme }) => css`
    ${theme.mediaQuery.tablet} {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 56px;
      border-bottom: solid 1px ${theme.colors.grayScale10};
      ${theme.fonts.body01B}
    }

    ${theme.mediaQuery.mobile} {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 56px;
      border-bottom: solid 1px ${theme.colors.grayScale10};
      ${theme.fonts.body01B}
    }
  `}
`

const StyledDivider = styled(Divider)`
  display: none;

  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      display: block;
    }

    ${theme.mediaQuery.mobile} {
      display: block;
    }
  `}
`

const StyledRadio = styled(Radio)`
  display: flex;
  flex-wrap: wrap;
  ${({ theme }): string => `
    ${theme.fonts.body02R}}
    gap: 20px;

    ${theme.mediaQuery.tablet} {
      ${theme.input.edit.small}
      gap: 12px;
    }

    ${theme.mediaQuery.mobile} {
      gap: 12px;
      ${theme.input.edit.small}
    }
  `}
`

const StyledTitleInput = styled(Input)`
  ${({ theme }): string => `
    ${theme.input.edit.large}

    ${theme.mediaQuery.tablet} {
      ${theme.input.edit.small}
    }

    ${theme.mediaQuery.mobile} {
      ${theme.input.edit.small}
    }
  `}
`
const StyledPostPage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 42px;

  ${({ theme }) => css`
    ${theme.mediaQuery.tablet} {
      margin: 0;
      margin-top: -67px;
      padding: 0;
    }

    ${theme.mediaQuery.mobile} {
      margin: 0;
      margin-top: -67px;
      padding: 0;
    }
  `};
`
const StyledTitleWrapper = styled.div`
  position: relative;
`
const StyledTitleLength = styled(Text)`
  position: absolute;
  right: 0;
  bottom: 16px;

  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      display: none;
    }

    ${theme.mediaQuery.mobile} {
      display: none;
    }
  `}
`
const StyledPostingHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin: 40px 0;

  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      margin-bottom: 0;
      gap: 32px;
    }

    ${theme.mediaQuery.mobile} {
      margin-bottom: 0;
      gap: 32px;
    }
  `}
`
const StyledTextareaWrapper = styled.div`
  margin: 40px 0 12px;

  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      margin-top:0;
    }

    ${theme.mediaQuery.mobile} {
      margin-top:0;
    }
  `}
`
const StyledPostForms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-top: 20px;

  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      gap: 12px;
    }

    ${theme.mediaQuery.mobile} {
      gap: 12px;
    }
  `}
`
const StyledTextarea = styled(TextArea)`
  width: 100%;
`
const StyledFormWrapper = styled.div`
  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      padding: 0 16px;
    }

    ${theme.mediaQuery.mobile} {
      padding: 0 16px;
    }
  `}
`

export default PostPage
