export {}

const resultPage = (): void => {
  const URL = 'http://localhost:3000'
  cy.visit(URL)
}

describe('첫 진입 페이지 ', () => {
  beforeEach(() => {
    resultPage()
  })
  it('배너가 텍스트가 보인다.', () => {
    cy.contains('처치곤란한 물건이 있다면?').should('be.visible')
  })

  it('카테고리가 들이 보인다', () => {
    cy.contains('남성패션/잡화').should('be.visible')
    cy.contains('여성패션/잡화').should('be.visible')
    cy.contains('게임').should('be.visible')
    cy.contains('스포츠/레저').should('be.visible')
    cy.contains('장난감/취미').should('be.visible')
    cy.contains('디지털기기').should('be.visible')
    cy.contains('자동차/공구').should('be.visible')
    cy.contains('생활가전').should('be.visible')
    cy.contains('가구/인테리어').should('be.visible')
    cy.contains('도서/티켓/음반').should('be.visible')
  })

  it('카테고리를 오른쪽으로 끝까지 하면 더보기 카테고리가 보인다', () => {
    cy.get('[data-test-id="category_scroll_area"]').scrollTo('right')
    cy.contains('더보기').should('be.visible')
  })

  it('페이지리를 아래로 내리면 상품이 보인다', () => {
    cy.scrollTo(0, 1000)
    cy.contains('시작가').should('be.visible')
  })
})
