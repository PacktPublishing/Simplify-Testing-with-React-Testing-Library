import fakePost from '../support/generateBlogPost'
import { addPage } from './pages/AddPage'
import { homePage } from './pages/HomePage'
import { postDetailPage } from './pages/PostDetailPage'

describe('Blog Flow', () => {
  let post = {}
  beforeEach(() => (post = fakePost()))

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
    cy.visit('/')
    cy.findByRole('link', { name: post.title }).should('not.exist')
  })

  it('Custom Command: allows a user to delete a new blog post', () => {
    cy.createBlogPost(post)
    cy.visit('/')
    cy.findByRole('link', { name: post.title }).click()
    cy.findByText(/delete post>/i).click()
    cy.visit('/')
    cy.findByRole('link', { name: post.title }).should('not.exist')
  })

  it('POM: allows a user to create a new blog post', () => {
    homePage.navigateToHomePage()
    homePage.navigateToAddPage()
    addPage.createNewPost(post)
    homePage.getBlogPost(post).should('be.visible')
  })

  it('POM: allows a user to delete a new blog post', () => {
    homePage.navigateToHomePage()
    homePage.navigateToAddPage()
    addPage.createNewPost(post)
    homePage.navigateToPostDetail(post)
    postDetailPage.deletePost()
    homePage.getBlogPost(post).should('not.exist')
  })
})
