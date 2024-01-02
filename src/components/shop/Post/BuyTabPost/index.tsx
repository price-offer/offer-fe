import type { ReactElement } from 'react'
import { LikeTabPanel } from './likeTabPanel'
import { OfferTabPanel } from './offerTabPanel'

import type { BuyTabPostProps } from './types'

const BuyTabPost = (props: BuyTabPostProps): ReactElement => {
  const isOfferType = props.activityType === 'offer'

  return (
    <>
      {isOfferType ? <OfferTabPanel {...props} /> : <LikeTabPanel {...props} />}
    </>
  )
}

export { BuyTabPost, BuyTabPostProps }
