# react-redux-template

#### Steps taken to set up this template:
- `create-react-app new-webpage`
- `yarn add enzyme react-test-renderer node-sass npm-run-all pre-commit codeceptjs webdriverio --dev`
- `yarn add react-redux redux`
- `yarn global add selenium-standalone`
- `selenium-standalone install`
- Create a `src/tests/App.test.js` file with a unit test using Jest and Enzyme
- Create the `codecept.conf.js` file along with the `acceptanceTests` directory
- Create a `acceptanceTests/welcomePage.js` file containing an acceptance test

#### Commands available:
Start the application (available at localhost:3000): `npm start`

Run all unit tests: `npm test`

Run all acceptance tests:
  - Run `npm start` to start the application
  - In a new terminal window run  `selenium-standalone start` to start the selenium server
  - In a third window run `npm run e2e` to run all acceptance tests
