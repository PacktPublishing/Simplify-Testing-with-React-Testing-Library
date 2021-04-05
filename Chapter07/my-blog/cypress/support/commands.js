// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands'

Cypress.Commands.add('createBlogPost', post => {
  // non API command example
  // cy.visit('/')
  // cy.findByRole('link', { name: /new post/i }).click()
  // cy.findByRole('textbox', { name: /title/i }).type(post.title)
  // cy.findByRole('textbox', { name: /category/i }).type(post.category)
  // cy.findByRole('textbox', { name: /image link/i }).type(post.image_url)
  // cy.findByRole('textbox', { name: /content/i }).type(post.content)
  // cy.findByRole('button', { name: /submit/i }).click()

  // API command example
  cy.request('POST', '/api/add', post).then(response => {
    expect(response.body.message).to.equal(
      `The blog "${post.title}" was successfully added`
    )
  })
})
