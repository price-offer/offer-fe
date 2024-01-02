export const noop = (): void => undefined

export const find = <T extends any[] | readonly any[]>(
  arr: T,
  target: UnknownObject<string | number>
): T extends readonly any[] ? ValueOf<T> : undefined => {
  const result = arr.find(item => {
    const splittedArr = splitObject(item)

    return splittedArr.some(splittedItem => {
      const [itemKey, itemValue] = Object.entries(splittedItem).flat()
      const [targetKey, targetValue] = Object.entries(target).flat()

      return itemKey === targetKey && itemValue === targetValue
    })
  })

  return result
}

type SplittedObjectArray<T> = { [key in KeyOf<T>]: ValueOf<T> }[]

export const splitObject = <T extends UnknownObject>(
  object: T
): SplittedObjectArray<T> =>
  Object.entries(object).map(([key, value]) => ({
    [key as string]: value
  })) as SplittedObjectArray<T>
