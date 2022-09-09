import{Given, When, And, Then} from "@badeball/cypress-cucumber-preprocessor";

Given('A user launches the Pokerstar sports URL',()=>{
    cy.viewport(1550, 780)
    cy.visit('https://www.pokerstarssports.uk/')
    cy.wait(1000)
})

When('A user click on accept cookie',()=>{
    cy.get('#onetrust-accept-btn-handler').click()
    cy.wait(1000)
})

And('A user clicks on the first Bet',()=>{
    cy.get('.button__bet').eq(0).click()
    cy.wait(1000)
})

Then('A user clciks on the second bet',()=>{
    cy.get('.button__bet').eq(1).click()
    cy.wait(10)
})

    