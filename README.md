This repo contains an automation framework of  website using Cypress, Cucumber and NPM.

Dependencies:

1.cypress
2.cypress-cucumber-preprocessor

Prerequisites:
Node.js
Npm

Install the below plugins in the terminal:

node js
npm
npm init
npm install cypress --save -dev
npm install @badeball/cypress-cucumber-preprocessor
npm i -D cypress @bahmutov/cypress-esbuild-preprocessor esbuild


Software:
Visual Studio code


Run:
npm run test

In this project I have created 4 scenarios for the 2 feature given:

1. Add bet
2. Remove Bet
3. Oddformat-american
4. Oddformat-decimal

The Features files and the step definition filesare located inside the features folder inside the e2e folder of the main cypress folder. To run the feature file just run the command npm run test in the terminal and the cypress opens up and click on the E2E testing to run on the desired browser.
