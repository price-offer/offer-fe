import type {
  SearchOptionsState,
  OnChangeSearchOptions
} from '../../result/SearchOptions/types'
import type { ProductListProps } from '@components/home'

export type PostSectionProps = {
  postsCount?: number
  infinitePosts: ProductListProps
  searchOptions: SearchOptionsState
  onChangeSearchOption: OnChangeSearchOptions
}
