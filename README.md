# Cypress API Testing
This is an example of how to automate API tests using Cypress.

## Installation and Execution
### Prerequisites

- Node.js

### Install dependencies

```
npm install
```

### Running tests via command line

Execute all tests via the command line with the following command:
```
npm run test
```

or

Filter the tests you want to execute via the command line using the following commands:

| Category           | Command					|
|--------------------|--------------------------|
| smoke				 | `npm run test:smoke`		|
| contract tests     | `npm run test:contract`	|
| functional tests   | `npm run test:functional`|

## Project Structure
```
.
├───cypress
│   ├───e2e
│   │   └───user
│   ├───fixtures
│   ├───results
│   └───support
│       └───schemas
|
```

## Technologies Used

- [Cypress](https://www.cypress.io/) - For writing and executing tests
- [Cypress Plugin API](https://github.com/filiphric/cypress-plugin-api) - To make API requests
- [Cy Spok](https://github.com/bahmutov/cy-spok) - To validate JSON schemas
- [Mochawesome](https://github.com/bchavez/Bogus) - to generate a standalone HTML/CSS report to help visualize your test runs
