Feature: oddsformat-american

  Feature This Feature is required for a user to change oddformat


  Scenario: Success change oddsformat
    Given A user launches the Pokerstar sports URL
    When A user click on accept cookie
    And A user clicks on the current format
    Then A user will be able to change the current format to the american format