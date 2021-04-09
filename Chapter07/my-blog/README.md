
<div>
  <h1 align="center">Simplify Testing with React Testing Library
  </h1>
  <strong> 
  Code examples for Chapter 7 - UI End-to-End Testing with Cypress
  </strong>
  <h2>
  Mini Project: <i>My Blog</i>
  </h2>
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

- Chapter 7 consists of multiple "mini" projects. We recommend opening the specific folder for a project in your text editor and not the top-level parent folder containing all chapter projects.

```bash
npm install
```

### Database

- Create a `.env.local` file at the root of the project folder and add credentials for your MongoDB Database:

```bash
MONGODB_URI="database credentials here"
```

- Note: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) is a free tool to quickly create a database
  - If you run into issues connecting to your database, you may also need to add your computer's public IP address to the [IP Access List Entries](https://docs.atlas.mongodb.com/security/ip-access-list/#std-label-access-list) to gain network access to the database

## Running the project

```bash
npm run dev
```

## Running the tests

- Be sure your development server is running before running Cypress tests.

### Run tests in interactive mode

```bash
npm e2e:open
```

### Run tests in headless mode

```bash
npm cy:run
```
