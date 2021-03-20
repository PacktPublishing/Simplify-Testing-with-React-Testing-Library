import fakePost from '../support/generateBlogPost'
import { addPage } from './pages/AddPage'
import { homePage } from './pages/HomePage'
import { postDetailPage } from './pages/PostDetailPage'

describe('Blog Flow', () => {
  it('allows a user to create and delete a new blog post', () => {
    cy.visit('/')
    // Create blog post
    cy.findByRole('link', { name: /new post/i }).click()
    cy.findByRole('textbox', { name: /title/i }).type(fakePost.title)
    cy.findByRole('textbox', { name: /category/i }).type(fakePost.category)
    cy.findByRole('textbox', { name: /image link/i }).type(fakePost.image_url)
    cy.findByRole('textbox', { name: /content/i }).type(fakePost.content)
    cy.findByRole('button', { name: /submit/i }).click()
    cy.findByRole('link', { name: fakePost.title }).should('be.visible')
    // Delete blog post
    cy.findByRole('link', { name: fakePost.title }).click()
    cy.findByText(/delete post>/i).click()
    cy.findByRole('link', { name: fakePost.title }).should('not.exist')
  })

  it('POM: allows a user to create a new blog post', () => {
    homePage.navigateToHomePage()
    homePage.navigateToAddPage()
    addPage.createNewPost(fakePost)
    homePage.getBlogPost(fakePost).should('be.visible')
  })

  it('POM: allows a user to delete a new blog post', () => {
    homePage.navigateToHomePage()
    homePage.navigateToAddPage()
    addPage.createNewPost(fakePost)
    homePage.navigateToPostDetail(fakePost)
    postDetailPage.deletePost()
    homePage.getBlogPost(fakePost).should('not.exist')
  })

  it('Custom Command: allows a user to delete a new blog post', () => {
    cy.createBlogPost(fakePost)
    homePage.navigateToPostDetail(fakePost)
    postDetailPage.deletePost()
    homePage.getBlogPost(fakePost).should('not.exist')
  })

  it('Custom API Command: allows a user to delete a new blog post', () => {
    cy.createBlogPost(fakePost)
    homePage.navigateToHomePage()
    homePage.navigateToPostDetail(fakePost)
    postDetailPage.deletePost()
    homePage.getBlogPost(fakePost).should('not.exist')
  })
})
