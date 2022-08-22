/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'

interface SliderDotProps {
  images: { id: number; url: string }[]
  translateValue: number
  moveRight(): void
}

const SliderDot = ({ images, translateValue, moveRight }: SliderDotProps) => {
  const [imageIndex, setImageIndex] = useState<number>(0)

  const moveCurrenyy = (): void => {}
  useEffect(() => {
    setImageIndex(translateValue / 70)
    const imageInterval = setInterval(() => {
      moveRight()
    }, 3000)
    return () => {
      clearInterval(imageInterval)
    }
  }, [translateValue])

  return (
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    <DotBox>
      {images.map(image => {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return <Dot key={image.id}></Dot>
      })}
      {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
      <CurrentDot
        className=""
        imageIndex={imageIndex}
        onClick={moveCurrenyy}></CurrentDot>
    </DotBox>
  )
}

export default SliderDot

const DotBox = styled.div`
  display: flex;
  gap: 5px;
  position: absolute;
  left: 50%;
  bottom: -30px;
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
  transform: ${({ imageIndex }) => `translate(${imageIndex * 17}px,-50%)`};
  transition: transform 0.5s;
`
