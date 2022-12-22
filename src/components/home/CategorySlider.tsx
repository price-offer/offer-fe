import { Image } from '@offer-ui/react'
import type { ReactElement } from 'react'

interface CategorySliderProps {
  imageList: {
    title: string
    url: string
    imageUrl: string
  }[]
}

const CategorySlider = ({ imageList }: CategorySliderProps): ReactElement => {
  return (
    <>
      <div>
        <div>LeftArrow</div>
        {imageList.map(cateGory => (
          <Image
            key={cateGory.title}
            alt={`category-${cateGory.title}`}
            src={cateGory.imageUrl}
          />
        ))}
        <div>RightArrow</div>
      </div>
    </>
  )
}
export { CategorySlider }
