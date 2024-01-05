import { Input } from '@offer-ui/react'
import type { ChangeEventHandler } from 'react'
import type { LimitedInputProps } from './types'

export const LimitedInput = ({
  maxLength,
  value,
  onChangeValue,
  onChange,
  ...props
}: LimitedInputProps) => {
  const handleChangeValue: ChangeEventHandler<HTMLInputElement> = e => {
    const newValue = e.target.value

    if (newValue.length <= maxLength) {
      onChangeValue(newValue)
    } else if (newValue.length > value.length) {
      const slicedValue = newValue.slice(0, maxLength)
      onChangeValue(slicedValue)
    }

    onChange?.(e)
  }

  return <Input value={value} onChange={handleChangeValue} {...props} />
}
