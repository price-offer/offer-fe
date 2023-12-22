import { toLocaleCurrency, toQueryString } from '.'

describe('format/toLocaleCurrency', () => {
  it('숫자를 넣어 호출 하는 경우, 한국의 화폐 단위로 반환해야 합니다.', () => {
    // Given
    const number = 10000

    // When
    const result = toLocaleCurrency(number)

    // Then
    expect(result).toBe('10,000')
  })
})

describe('format/toQueryString', () => {
  it('객체를 넣었을 때 QueryString 형태로 반환해야 합니다.', () => {
    // Given
    const object = {
      content_id: 123,
      type: 'user'
    }

    // When
    const result = toQueryString(object)

    // Then
    expect(result).toBe('?content_id=123&type=user')
  })
})
