describe('empty spec', () => {
  it('passes', () => {
    cy.viewport(1550, 780)
    cy.visit('https://www.pokerstarssports.uk/')
    cy.get('#onetrust-accept-btn-handler').click()
    cy.wait(100)
    cy.get('.button__bet').first().click()
    cy.wait(10)
    cy.get('.button__bet').eq(2).click()
    cy.get('.remove-all').click()
    cy.wait(100)
    cy.get('.-yes').click()
  })
})