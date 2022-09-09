import{Given, When, And, Then} from "@badeball/cypress-cucumber-preprocessor";

Given('A user launches the Pokerstar sports URL',()=>{
    cy.viewport(1550, 780)
    cy.visit('https://www.pokerstarssports.uk/')
    cy.wait(1000)
})

When('A user click on accept cookie',()=>{
    cy.get('#onetrust-accept-btn-handler').click()
    cy.wait(10)
})

And('A user clicks on the current format',()=>{
    cy.get('.currentFormat').click()
    cy.wait(100)
})


Then('A user will be able to change the current format to the decimal format',()=>{
    cy.get('#Decimal').click()
    cy.wait(100)
    
})