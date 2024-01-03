export const isNumber = (num: unknown): num is number =>
  !isNaN(num as number) && isFinite(num as number) && typeof num === 'number'
