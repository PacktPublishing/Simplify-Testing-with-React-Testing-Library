import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import post from '../../support/generateBlogPost'
const currentPost = post()

Given('I am on the home page', () => {
  cy.visit('/')
})

When('I click the "New Post" link', () => {
  cy.findByRole('link', { name: /new post/i }).click()
})

When('I fill out the new blog form', () => {
  cy.findByRole('textbox', { name: /title/i }).type(currentPost.title)
  cy.findByRole('textbox', { name: /category/i }).type(currentPost.category)
  cy.findByRole('textbox', { name: /image link/i }).type(currentPost.image_url)
  cy.findByRole('textbox', { name: /content/i }).type(currentPost.content)
})

When('I click "Submit"', () => {
  cy.findByRole('button', { name: /submit/i }).click()
})

Then('I see the new post on the home page', () => {
  cy.findByRole('link', { name: currentPost.title }).should('be.visible')
})

When('I click the blog post name link', () => {
  cy.findByRole('link', { name: currentPost.title }).click()
})

When('I click the delete link', () => {
  cy.findByText(/delete post>/i).click()
  cy.visit('/')
})

Then('the post is removed from the home page', () => {
  cy.findByRole('link', { name: currentPost.title }).should('not.exist')
})
