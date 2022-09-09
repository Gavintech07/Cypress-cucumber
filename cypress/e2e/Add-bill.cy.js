describe('Add-bill spec', () => {
  it('passes', () => {
    cy.viewport(1550, 780)
    cy.visit('https://www.pokerstarssports.uk/')
    cy.wait(1000)
    cy.get('#onetrust-accept-btn-handler').click()
    cy.wait(10)
    cy.get('.button__bet').first().click()
    cy.wait(10)
    cy.get('.button__bet').eq(2).click()
   
  })
}) 