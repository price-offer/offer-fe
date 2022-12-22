import { Button } from '@offer-ui/react'
import type { ReactElement } from 'react'

const HomeBanner = (): ReactElement => {
  return (
    <>
      <div>
        <div>title1</div>
        <div>title2</div>
        <Button>SellButton</Button>
      </div>
      <div>
        <div>NewProduct</div>
      </div>
    </>
  )
}
export default HomeBanner
