import { Styled } from './styled'
import type { PostSectionProps } from './types'
import { useGetCategoriesQuery } from '@apis/post'
import { SearchOptions, CategorySlideFilter, ProductList } from '@components'

export const PostSection = ({
  infinitePosts,
  postsCount = 0,
  searchOptions,
  onChangeSearchOption
}: PostSectionProps) => {
  const getCategoriesQuery = useGetCategoriesQuery()
  const categories =
    getCategoriesQuery.data?.map(({ code, name }) => ({
      code,
      name
    })) || []

  return (
    <>
      <Styled.CategorySliderWrapper>
        <CategorySlideFilter
          categories={categories}
          selectedCategory={searchOptions.category}
          onClickCategory={code => onChangeSearchOption('category', code)}
        />
      </Styled.CategorySliderWrapper>
      <SearchOptions
        categories={categories}
        postsCount={postsCount}
        searchOptions={searchOptions}
        onChangeSearchOption={onChangeSearchOption}
      />
      {postsCount > 0 ? (
        <ProductList {...infinitePosts} />
      ) : (
        <Styled.Placeholder>
          <Styled.PlaceholderTitle>검색 결과 없음</Styled.PlaceholderTitle>
          <Styled.PlaceholderDescription>
            찾으시는 검색 결과가 없어요
          </Styled.PlaceholderDescription>
        </Styled.Placeholder>
      )}
    </>
  )
}
