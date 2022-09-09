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

And('A user clicks on the first Bet',()=>{
    cy.get('.button__bet').first().click()
    cy.wait(1000)
})

And('A user clciks on the second bet',()=>{
    cy.get('.button__bet').eq(2).click()
    cy.wait(1000)
})

And('A user will be able to add bets in the bet slip',()=>{
    
})
Then('user clicks remove button to remove the bets' ,()=>{
    cy.get('.remove-all').click()
    cy.wait(1000)
    cy.get('.-yes').click()
})