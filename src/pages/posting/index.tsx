import styled from '@emotion/styled'
import {
  ImageUploader,
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
  UploaderOnChangeHandler,
  SelectOnChangeHandler,
  InputProps
} from '@offer-ui/react'
import type { ReactElement, ChangeEventHandler } from 'react'
import { useState } from 'react'
import { PostingForm } from '@components'
import { CATEGORIES, TRADE_METHOD, PRODUCT_STATUS } from '@constants'
import { useResponsive } from '@hooks'

interface PostForm {
  imageUrls: ImageInfo[] | null
  title: string
  categoryCode: number | null
  tradeArea: string
  productStatusCode: string
  tradeMethodCode: number | null
  content: string
  price: number
}

type HandleUpdatePostForm = ChangeEventHandler<
  HTMLTextAreaElement | HTMLInputElement | HTMLFormElement
>
type PostFormKeys = keyof PostForm

const PostingPage = (): ReactElement => {
  const [postForm, setPostForm] = useState<PostForm>({
    imageUrls: null,
    title: '',
    categoryCode: null,
    tradeArea: '',
    productStatusCode: '',
    tradeMethodCode: null,
    content: '',
    price: 0
  })
  const InputSize = useResponsive<InputProps, 'width'>({
    desktop: '278px',
    tablet: '100%'
  })

  const isCompleteForm = (Object.keys(postForm) as PostFormKeys[])
    .map(item => !!postForm[item])
    .reduce((prev, cur) => prev && cur, true)

  const handleUpdateCategory: SelectOnChangeHandler = ({ code }) => {
    setPostForm({
      ...postForm,
      categoryCode: Number(code)
    })
  }

  const handleUpdateImageUrls: UploaderOnChangeHandler = ({ images }): void => {
    setPostForm({
      ...postForm,
      imageUrls: images
    })
  }

  const handleUpdatePostForm: HandleUpdatePostForm = (e): void => {
    const { name, value } = e.currentTarget
    const isSendNumber = name === 'tradeMethodCode'

    setPostForm({
      ...postForm,
      [name]: isSendNumber ? Number(value) : value
    })
  }

  return (
    <StyledPostingPage>
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
            <ImageUploader
              images={postForm.imageUrls || []}
              onChange={handleUpdateImageUrls}
            />
          </div>
        </StyledPostingHeader>
        <StyledDivider gap={20} />
        <Text styleType="headline02B" tag="p">
          필수 입력 정보
          <StyledRequiredMark color="brandPrimary" styleType="headline02B">
            *
          </StyledRequiredMark>
        </Text>
        <StyledPostingForms>
          <PostingForm label="카테고리">
            <SelectBox
              items={CATEGORIES}
              placeholder="선택"
              size="small"
              onChange={handleUpdateCategory}
            />
          </PostingForm>
          <PostingForm label="시작가">
            <Input
              isPrice
              name="price"
              placeholder="시작가를 입력하세요"
              width={InputSize}
              onChange={handleUpdatePostForm}
            />
          </PostingForm>
          <PostingForm label="거래 지역">
            <Input
              name="tradeArea"
              placeholder="ex. 동작구 사당동"
              width={InputSize}
              onChange={handleUpdatePostForm}
            />
          </PostingForm>
          <StyledRadioPostingForm label="상품 상태">
            <StyledRadio
              direction="horizontal"
              formName="productStatusCode"
              items={PRODUCT_STATUS}
              onChange={handleUpdatePostForm}
            />
          </StyledRadioPostingForm>
          <StyledRadioPostingForm label="거래 방법">
            <StyledRadio
              direction="horizontal"
              formName="tradeMethodCode"
              items={TRADE_METHOD}
              onChange={handleUpdatePostForm}
            />
          </StyledRadioPostingForm>
        </StyledPostingForms>
        <StyledDivider gap={20} />
        <StyledTextareaWrapper>
          <Text color="grayScale70" styleType="body01M">
            상품 설명
          </Text>
          <StyledTextarea name="content" onChange={handleUpdatePostForm} />
        </StyledTextareaWrapper>
      </StyledFormWrapper>
      <StyledButtonWrapper>
        <Button
          styleType={`${isCompleteForm ? 'solidPrimary' : 'solidDisabled'}`}>
          확인
        </Button>
      </StyledButtonWrapper>
    </StyledPostingPage>
  )
}

const StyledRadioPostingForm = styled(PostingForm)`
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
  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 56px;
      border-bottom: solid 1px ${theme.colors.grayScale10};
      ${theme.fonts.body01B}
    }

    ${theme.mediaQuery.mobile} {
      display: flex;
      justify-content: center;
      align-items: center;
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
const StyledPostingPage = styled.div`
  margin: 42px 0 0;
  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      margin: 0;
    }

    ${theme.mediaQuery.mobile} {
      margin: 0;
    }
  `}
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
const StyledPostingForms = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

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

export default PostingPage
