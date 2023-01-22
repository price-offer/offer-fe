import styled from '@emotion/styled'
import { SelectBox } from '@offer-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <Mediume
        colorType="light"
        items={[
          {
            text: '직거래/택배거래',
            value: '0'
          },
          {
            text: '직거래',
            value: '1'
          },
          {
            text: '택배거래',
            value: '2'
          }
        ]}
        placeholder="거래방식"
        value=""
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={(): void => {}}></Mediume>
      <Select
        colorType="light"
        items={[
          {
            text: '직거래/택배거래',
            value: '0'
          },
          {
            text: '직거래',
            value: '1'
          },
          {
            text: '택배거래',
            value: '2'
          }
        ]}
        placeholder="거래방식"
        value=""
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={(): void => {}}></Select>
    </div>
  )
}

export default Home

const Select = styled(SelectBox)`
  ${({ theme }): any => theme.selectBox?.small?.default}
`
const Mediume = styled(SelectBox)`
  ${({ theme }): any => theme.selectBox?.medium?.default}
`
