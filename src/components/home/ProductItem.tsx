import { Image, ToggleButton } from '@offer-ui/react'

import type { ReactElement } from 'react'

interface ProductItemProps {
  productItem: {
    title: string
    url: string
    imageUrl: string
    price: string
  }
}

const ProductItem = ({ productItem }: ProductItemProps): ReactElement => {
  return (
    <>
      <div>
        <Image
          key={productItem.title}
          alt={`productName-${productItem.title}`}
          src={productItem.imageUrl}
        />
        <ToggleButton></ToggleButton>
      </div>
      <div>{productItem.title}</div>
      <div>{productItem.price}</div>
      <div>address,time</div>
    </>
  )
}
export { ProductItem }
