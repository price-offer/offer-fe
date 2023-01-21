import { noop } from '.'

describe('common/noop', () => {
  it('호출 시, 빈 함수를 반환해야 합니다.', () => {
    // Given, When
    const result = noop()

    // Then
    expect(result).not.toBeDefined()
  })
})
