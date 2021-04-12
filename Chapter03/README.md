<div>
  <h1 align="center">Simplify Testing with React Testing Library
  </h1>
  <strong> Code examples for Chapter 3 - Testing Complex Components with React Testing Library
  </strong>
</div>

## System Requirements

- [npm](https://www.npmjs.com/)
- [node](https://nodejs.org)
- [git](https://git-scm.com/)

Use the following commands to verify required tooling:

```bash
git --version
node --version
npm --version
```

## Setup

```bash
npm install
```

## Running the project

```bash
npm start
```

- Note: you will see the starter text "Replace me with chapter related components" when you initially run the app. Simply replace the text with any component in the chapter repo.

## Using The Real [CocktailDB API](https://www.thecocktaildb.com)

- The default setup returns mock MSW server data for the `<DrinkSearch>` component. To access the real API data, comment out the following three lines inside index.js:

```bash
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}
```

## Running the tests

```bash
npm test
```
