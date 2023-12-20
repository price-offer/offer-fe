import { find, noop, splitObject } from '.'
import { SORT_OPTIONS } from '@constants/app'

describe('common/noop', () => {
  it('호출 시, 빈 함수를 반환해야 합니다.', () => {
    // Given, When
    const result = noop()

    // Then
    expect(result).not.toBeDefined()
  })
})

describe('common/splitObject', () => {
  it('빈 객체를 인자로 받는 경우, 빈 배열을 반환해야 합니다.', () => {
    // Given
    const object = {}

    // When
    const result = splitObject(object)

    // Then
    expect(result).toEqual([])
  })

  it('키가 여러개인 객체를 인자로 받는 경우, 해당 key, value를 객체로 변환하여 객체들의 배열로 반환해야 합니다.', () => {
    // Given
    const object = {
      name: 'foo',
      age: 1
    }

    // When
    const result = splitObject<typeof object>(object)

    // Then
    expect(result).toEqual([{ name: 'foo' }, { age: 1 }])
  })
})

describe('common/find', () => {
  it('객체로 이루어진 배열 목록과 일부 속성과 값을 인자로 받고 해당 속성과 값과 일치하는 첫번째 아이템을 반환해야 합니다.', () => {
    // Given
    const users = [
      { name: 'sonny', age: 20 },
      { name: 'son', age: 20 }
    ]
    const user = { age: 20 }

    // When
    const result = find(users, user)

    // Then
    expect(result).toEqual(users[0])
  })

  it('객체로 이루어진 배열 목록과 일부 속성과 값을 인자로 받고 해당 속성과 값과 일치하는 아이템이 없는 경우, undefined를 반환해야 합니다.', () => {
    // Given
    const users = [
      { name: 'sonny', age: 20 },
      { name: 'son', age: 20 }
    ]
    const user = { age: 21 }

    // When
    const result = find(users, user)

    // Then
    expect(result).toEqual(undefined)
  })

  it('정렬 옵션 배열과 정렬 옵션의 일부 속성과 값을 인자로 받고 해당 속성과 값과 일치하는 첫번째 아이템을 반환해야 합니다.', () => {
    // Given
    const item = { name: '최신순' }

    // When
    const result = find(SORT_OPTIONS, item)

    // Then
    expect(result).toEqual(SORT_OPTIONS[0])
  })
})
