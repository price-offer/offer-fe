import { CATEGORIES } from '@constants'

const visitMainPage = (): void => {
  const URL = 'http://localhost:3000'
  cy.visit(URL)
}

describe('첫 진입 페이지 ', () => {
  beforeEach(() => {
    visitMainPage()
  })
  it('배너의 텍스트가 보인다.', () => {
    cy.contains('처치곤란한 물건이 있다면?').should('be.visible')
  })

  it('카테고리 들이 보인다', () => {
    CATEGORIES.forEach(category => {
      cy.contains(category.name).should('be.visible')
    })
  })

  it('카테고리를 오른쪽으로 끝까지 하면 더보기 카테고리가 보인다', () => {
    cy.get('[data-test-id="category_scroll_area"]').scrollTo('right')
    cy.contains('더보기').should('be.visible')
  })

  it('페이지를 아래로 내리면 상품이 보인다', () => {
    cy.scrollTo(0, 1000)
    cy.contains('시작가').should('be.visible')
  })
})
