/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Arrow, ArrowBox, Image, ImageBox, Slider } from './style'
import { useEffect, useState } from 'react'
import { ICON } from '../../constants/icons'
import styled from '@emotion/styled'

interface CarouselProps {
  images: { url: string; id: number }[]
  isArrow: boolean
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Carousel = ({ images, isArrow }: CarouselProps) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const arrowRight = ICON.CHEVRON_RIGHT_40
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const arrowLeft = ICON.CHEVRON_LEFT_40
  const [translateValue, setTranslateValue] = useState<number>(0)
  const [mouseDownClientX, setMouseDownClientX] = useState<number>(0)
  const [mouseUpClientX, setMouseUpClientX] = useState<number>(0)
  const [cursorOn, setCursorOn] = useState<boolean>(false)

  const moveCurrenyy = (imageIndex: number) => {
    setTranslateValue((imageIndex - 1) * 60)
  }
  const moveRight = (): void => {
    if (translateValue !== 60 * (images.length - 1)) {
      setTranslateValue(prev => prev + 60)
    } else {
      setTranslateValue(0)
    }
  }

  const moveLeft = (): void => {
    if (translateValue !== 0) {
      setTranslateValue(prev => prev - 60)
    } else {
      setTranslateValue(70 * (images.length - 1))
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onMouseDown = (e: any) => {
    setMouseDownClientX(e.clientX)
    setCursorOn(true)
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onMouseUp = (e: any) => {
    setMouseUpClientX(e.clientX)
    setCursorOn(false)
  }

  useEffect(() => {
    const dragSpace = Math.abs(mouseDownClientX - mouseUpClientX)
    if (mouseDownClientX !== 0) {
      if (mouseUpClientX < mouseDownClientX && dragSpace > 100) {
        moveRight()
      } else if (mouseUpClientX > mouseDownClientX && dragSpace > 100) {
        moveLeft()
      }
    }
    // const imageInterval = setInterval(() => {
    //   moveRight()
    // }, 3000)
    // return () => {
    //   clearInterval(imageInterval)
    // }
  }, [mouseUpClientX])

  return (
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    <Container>
      <Slider
        cursorOn={cursorOn}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}>
        <ImageBox translateValue={translateValue !== 0 ? translateValue : null}>
          {images.map((image, idx) => {
            return <Image key={image.id} alt={'image' + idx} src={image.url} />
          })}
        </ImageBox>
        {isArrow && (
          <ArrowBox>
            <Arrow src={arrowLeft.src} onClick={moveLeft}></Arrow>
            <Arrow src={arrowRight.src} onClick={moveRight}></Arrow>
          </ArrowBox>
        )}
      </Slider>
      <DotBox>
        {images.map(image => {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          return (
            <Dot
              key={image.id}
              className={`${image.id}`}
              onClick={() => {
                moveCurrenyy(image.id)
              }}></Dot>
          )
        })}
        {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
        <CurrentDot className="" imageIndex={translateValue / 70}></CurrentDot>
      </DotBox>
    </Container>
  )
}

export default Carousel
export const Container = styled.div`
  position: relative;
`

const DotBox = styled.div`
  display: flex;
  gap: 5px;
  position: absolute;
  left: 50%;
  bottom: -30px;
  cursor: pointer;
  transform: translateX(-50%);
`

const Dot = styled.div`
  width: 10px;
  height: 10px;
  background-color: gray;
  border-radius: 100px;
  height: 10px;
  margin: 0 1px;
  font-size: 20px;
`

interface CurrentDotProps {
  imageIndex: number
}
const CurrentDot = styled.div<CurrentDotProps>`
  width: 10px;
  height: 10px;
  background-color: dodgerblue;
  position: absolute;
  left: 0;
  top: 50%;
  font-size: 20px;
  margin: 0 1px;
  border-radius: 100px;
  cursor: pointer;
  transform: ${({ imageIndex }) => `translate(${imageIndex * 20}px,-50%)`};
  transition: transform 0.5s;
`
