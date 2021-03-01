import post from '../support/generateBlogPost'

describe('Blog Flow', () => {
  it('allows a user to create and delete a new blog post', () => {
    cy.visit('/')
    // Create blog post
    cy.findByRole('link', { name: /new post/i }).click()
    cy.findByRole('textbox', { name: /title/i }).type(post.title)
    cy.findByRole('textbox', { name: /category/i }).type(post.category)
    cy.findByRole('textbox', { name: /image link/i }).type(post.image_url)
    cy.findByRole('textbox', { name: /content/i }).type(post.content)
    cy.findByRole('button', { name: /submit/i }).click()
    cy.findByRole('link', { name: post.title }).should('be.visible')
    // Delete blog post
    cy.findByRole('link', { name: post.title }).click()
    cy.findByText(/delete post>/i).click()
    cy.findByRole('link', { name: post.title }).should('not.exist')
  })
})
