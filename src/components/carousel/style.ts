/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from '@emotion/styled'

interface SliderProps {
  cursorOn: boolean
}
export const Slider = styled.div<SliderProps>`
  position: relative;
  max-width: 50vw;
  height: 500px;
  display: flex;
  overflow: hidden;
  margin: 0 auto;
  cursor: ${({ cursorOn }) => cursorOn && 'pointer'};
`

interface ImageBoxProps {
  translateValue: number | null
}
export const ImageBox = styled.div<ImageBoxProps>`
  display: flex;
  transition: 1s;
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  transform: ${({ translateValue }) => `translateX(-${translateValue}vw)`};
`

export const Image = styled.img`
  width: 50vw;
  object-fit: cover;
  object-position: center center;
`

export const ArrowBox = styled.div`
  position: absolute;
  left: -20px;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

export const Arrow = styled.img`
  color: white;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: dodgerblue;
  }
`
