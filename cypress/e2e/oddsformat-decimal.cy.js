describe('empty spec', () => {
  it('passes', () => {
    cy.viewport(1550, 780)
    cy.visit('https://www.pokerstarssports.uk/')
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('.currentFormat').click()
    cy.wait(100)
    cy.get('#Decimal').click()
    cy.wait(100)
  })
})