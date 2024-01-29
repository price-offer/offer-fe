import { css } from '@emotion/react'
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
import type { ImageInfo, InputProps } from '@offer-ui/react'
import { isEqual } from 'lodash'
import type { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import { localeCurrencyToNumber } from '@utils/format'
import type { CreatePostReq } from '@apis'
import {
  useGetCategoriesQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useGetPostQuery,
  useCreateUploadImagesMutation
} from '@apis'
import { PostForm } from '@components'
import { TRADE_TYPES, PRODUCT_CONDITIONS, TRADE_STATUS } from '@constants'
import { useAuth, usePreventLeavePage, useResponsive } from '@hooks'

type PostFormState = Partial<
  Omit<CreatePostReq, 'price' | 'thumbnailImageUrl' | 'imageUrls'>
> & {
  price?: string
  imageInfos?: ImageInfo[]
}
type PostFormStateKeys = KeyOf<PostFormState>
type PostFormStateValues = ValueOf<PostFormState>

const postFormKeys: (keyof PostFormState)[] = [
  'title',
  'description',
  'location',
  'category',
  'tradeType',
  'productCondition',
  'price',
  'imageInfos'
]

const isCompleteForm = (
  postForm: PostFormState
): postForm is Required<PostFormState> =>
  postFormKeys.every(key => Boolean(postForm[key]))

const getImageFormData = (files: File[]) => {
  const imageFormData = new FormData()

  files.forEach(file => imageFormData.append('files', file))

  return imageFormData
}

type Props = { editPostId: number; type: string }
export const getServerSideProps: GetServerSideProps<Props> = async ({
  query
}) => ({
  props: {
    editPostId: Number(query.postId),
    type: (query.type as string) || ''
  }
})

const PostPage = ({ type, editPostId }: Props): ReactElement => {
  const createPostMutation = useCreatePostMutation()
  const getPostQuery = useGetPostQuery(editPostId)
  const createUploadImagesMutation = useCreateUploadImagesMutation()
  const getCategoriesQuery = useGetCategoriesQuery()
  const updatePostMutation = useUpdatePostMutation()

  const [postForm, setPostForm] = useState<PostFormState>({})
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const { user } = useAuth()

  const initialPostForm: PostFormState = getPostQuery.data?.postForm || {}
  const hasChanged = !isEqual(initialPostForm, postForm)
  const canPosting = hasChanged && isCompleteForm(postForm) && !isLoading

  usePreventLeavePage(hasChanged)

  const InputSize = useResponsive<InputProps, 'width'>({
    desktop: '278px',
    tablet: '100%'
  })

  const handleUpdatePostForm = (
    name: PostFormStateKeys,
    value: PostFormStateValues
  ): void => {
    setPostForm({
      ...postForm,
      [name]: value
    })
  }

  const handlePostProduct = async () => {
    if (!canPosting) {
      return
    }

    setIsLoading(true)

    const { imageInfos, price, ...post } = postForm
    const imageFiles = imageInfos
      .filter(({ file }) => Boolean(file))
      .map(({ file }) => file) as File[]
    let imageUrls = imageInfos.filter(({ file }) => !file).map(({ url }) => url)
    let postId = editPostId

    if (imageFiles.length > 0) {
      const imageFormData = getImageFormData(imageFiles)

      const { imageUrls: newImageUrls } =
        await createUploadImagesMutation.mutateAsync(imageFormData)

      imageUrls = imageUrls.concat(newImageUrls)
    }

    const [thumbnailImageUrl, ...images] = imageUrls || []

    const nextPost = {
      ...post,
      imageUrls: images,
      price: localeCurrencyToNumber(price),
      thumbnailImageUrl: thumbnailImageUrl
    }

    if (type === 'update') {
      await updatePostMutation.mutateAsync({
        postId,
        ...nextPost,
        tradeStatus: getPostQuery.data?.tradeStatus.code || TRADE_STATUS[0].code
      })
    } else {
      const res = await createPostMutation.mutateAsync(nextPost)

      postId = res.id
    }

    router.replace(`/post/${postId}`)
    setIsLoading(false)
  }

  useEffect(() => {
    if (getPostQuery.data) {
      const { seller } = getPostQuery.data

      if (seller.id !== user.id) {
        router.push('/403')
        return
      }

      setPostForm(getPostQuery.data.postForm)
    }
  }, [getPostQuery.data])

  if (getPostQuery.isError) {
    router.push('/403')

    return <></>
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
              value={postForm.title}
              onChange={e => handleUpdatePostForm('title', e.target.value)}
            />
            <StyledTitleLength styleType="subtitle01M">
              {postForm.title?.length}/40
            </StyledTitleLength>
          </StyledTitleWrapper>
          <div>
            <ImageUploader
              images={postForm.imageInfos || []}
              onChange={({ images }) =>
                handleUpdatePostForm('imageInfos', images)
              }
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
        <StyledPostForms>
          <PostForm label="카테고리">
            <SelectBox
              items={getCategoriesQuery.data || []}
              placeholder="선택"
              size="small"
              value={postForm.category}
              onChange={({ code }) => handleUpdatePostForm('category', code)}
            />
          </PostForm>
          <PostForm label="시작가">
            <Input
              isPrice
              name="price"
              placeholder="시작가를 입력하세요"
              value={postForm.price}
              width={InputSize}
              onChange={e => handleUpdatePostForm('price', e.target.value)}
            />
          </PostForm>
          <PostForm label="거래 지역">
            <Input
              name="location"
              placeholder="ex. 동작구 사당동"
              value={postForm.location}
              width={InputSize}
              onChange={e => handleUpdatePostForm('location', e.target.value)}
            />
          </PostForm>
          <StyledRadioPostForm label="상품 상태">
            <StyledRadio
              direction="horizontal"
              formName="productCondition"
              items={PRODUCT_CONDITIONS}
              selectedValue={postForm.productCondition}
              onChange={e =>
                handleUpdatePostForm('productCondition', e.target.value)
              }
            />
          </StyledRadioPostForm>
          <StyledRadioPostForm label="거래 방법">
            <StyledRadio
              direction="horizontal"
              formName="tradeType"
              items={TRADE_TYPES}
              selectedValue={postForm.tradeType}
              onChange={e => handleUpdatePostForm('tradeType', e.target.value)}
            />
          </StyledRadioPostForm>
        </StyledPostForms>
        <StyledDivider gap={20} />
        <StyledTextareaWrapper>
          <Text color="grayScale70" styleType="body01M">
            상품 설명
          </Text>
          <StyledTextarea
            name="description"
            value={postForm.description}
            onChange={e => handleUpdatePostForm('description', e.target.value)}
          />
        </StyledTextareaWrapper>
      </StyledFormWrapper>
      <StyledButtonWrapper>
        <Button
          disabled={!canPosting}
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

const StyledTitleInput = styled(Input.Edit)`
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
