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
import type {
  ImageInfo,
  UploaderOnChangeHandler,
  SelectOnChangeHandler,
  InputProps
} from '@offer-ui/react'
import type { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import type { ReactElement, ChangeEventHandler } from 'react'
import { useEffect, useState } from 'react'
import { useCreateUploadImagesMutation } from '@apis/image'
import type { CreatePostReq } from '@apis/post'
import {
  useGetCategoriesQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useGetPostQuery
} from '@apis/post'
import { localeCurrencyToNumber } from '@utils/format'
import { PostForm } from '@components'
import { TRADE_TYPES, PRODUCT_CONDITIONS, TRADE_STATUS } from '@constants'
import { useResponsive } from '@hooks'

type PostFormState = Partial<
  Omit<CreatePostReq, 'price' | 'thumbnailImageUrl' | 'imageUrls'>
> & {
  price?: string
  imageInfos?: ImageInfo[]
}
type HandleUpdatePostForm = ChangeEventHandler<
  HTMLTextAreaElement | HTMLInputElement | HTMLFormElement
>

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

type Props = { editPostId: number; type: string }
export const getServerSideProps: GetServerSideProps<Props> = async ({
  query
}) => ({
  props: {
    editPostId: Number(query.postId),
    type: query.type as string
  }
})

const PostPage = ({ type, editPostId }: Props): ReactElement => {
  const postMutation = useCreatePostMutation()
  const getPostQuery = useGetPostQuery(editPostId)
  const uploadImagesQuery = useCreateUploadImagesMutation()
  const categoriesQuery = useGetCategoriesQuery()
  const updatePostMutation = useUpdatePostMutation(editPostId)
  const router = useRouter()

  const [postForm, setPostForm] = useState<PostFormState>({})

  const InputSize = useResponsive<InputProps, 'width'>({
    desktop: '278px',
    tablet: '100%'
  })

  const handleUpdateCategory: SelectOnChangeHandler = ({ code }) => {
    setPostForm({
      ...postForm,
      category: code
    })
  }

  const handleUpdateImageInfos: UploaderOnChangeHandler = async ({
    images
  }) => {
    const imageFormData = new FormData()

    images.forEach(
      info => info.file && imageFormData.append('files', info.file)
    )

    const { imageUrls } = await uploadImagesQuery.mutateAsync(imageFormData)
    const imageInfos = postForm.imageInfos || []
    const newImageInfos = imageUrls.map((url, idx) => ({
      id: String(idx + imageInfos.length),
      url
    }))

    const nextImageInfos = [...imageInfos, ...newImageInfos]

    setPostForm(prev => ({
      ...prev,
      imageInfos: nextImageInfos
    }))
  }

  const handleUpdatePostForm: HandleUpdatePostForm = (e): void => {
    const { name, value } = e.target

    setPostForm({
      ...postForm,
      [name]: value
    })
  }

  const handlePostProduct = async () => {
    if (!isCompleteForm(postForm)) {
      return
    }

    let postId = editPostId
    const { imageInfos, price, ...post } = postForm
    const [thumbnailImageUrl, ...images] = imageInfos || []
    const imageUrls = images.map(info => info.url)

    const nextPost = {
      ...post,
      imageUrls,
      price: localeCurrencyToNumber(price),
      thumbnailImageUrl: thumbnailImageUrl.url
    }

    if (type === 'update') {
      await updatePostMutation.mutateAsync({
        ...nextPost,
        tradeStatus: TRADE_STATUS[0].code
      })
    } else {
      const res = await postMutation.mutateAsync(nextPost)
      postId = res.id
    }

    router.replace(`/post/${postId}`)
  }

  useEffect(() => {
    if (getPostQuery.data) {
      const {
        category,
        tradeType,
        productCondition,
        imageUrls,
        thumbnailImageUrl,
        price,
        ...post
      } = getPostQuery.data
      const imageInfos =
        imageUrls.map((url, idx) => ({
          id: String(idx + 1),
          url
        })) || []
      const thumbnailImageInfo = {
        id: '0',
        isRepresent: true,
        url: thumbnailImageUrl || ''
      }
      const initialPostForm = {
        category: category.code,
        tradeType: tradeType.code,
        productCondition: productCondition.code,
        price: String(price),
        imageInfos: [thumbnailImageInfo, ...imageInfos],
        ...post
      }

      setPostForm(initialPostForm)
    }
  }, [getPostQuery.data])

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
              value={postForm.title}
              onChange={handleUpdatePostForm}
            />
            <StyledTitleLength styleType="subtitle01M">
              {postForm.title?.length}/40
            </StyledTitleLength>
          </StyledTitleWrapper>
          <div>
            <ImageUploader
              images={postForm.imageInfos || []}
              onChange={handleUpdateImageInfos}
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
              items={categoriesQuery.data || []}
              placeholder="선택"
              size="small"
              value={postForm.category}
              onChange={handleUpdateCategory}
            />
          </PostForm>
          <PostForm label="시작가">
            <Input
              isPrice
              name="price"
              placeholder="시작가를 입력하세요"
              value={postForm.price}
              width={InputSize}
              onChange={handleUpdatePostForm}
            />
          </PostForm>
          <PostForm label="거래 지역">
            <Input
              name="location"
              placeholder="ex. 동작구 사당동"
              value={postForm.location}
              width={InputSize}
              onChange={handleUpdatePostForm}
            />
          </PostForm>
          <StyledRadioPostForm label="상품 상태">
            <StyledRadio
              direction="horizontal"
              formName="productCondition"
              items={PRODUCT_CONDITIONS}
              selectedValue={postForm.productCondition}
              onChange={handleUpdatePostForm}
            />
          </StyledRadioPostForm>
          <StyledRadioPostForm label="거래 방법">
            <StyledRadio
              direction="horizontal"
              formName="tradeType"
              items={TRADE_TYPES}
              selectedValue={postForm.tradeType}
              onChange={handleUpdatePostForm}
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
            onChange={handleUpdatePostForm}
          />
        </StyledTextareaWrapper>
      </StyledFormWrapper>
      <StyledButtonWrapper>
        <Button
          disabled={!isCompleteForm(postForm)}
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
