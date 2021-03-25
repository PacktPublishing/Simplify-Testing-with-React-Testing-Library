import fakePost from '../support/generateBlogPost'
const post = fakePost()

describe('API', () => {
  const getAllPosts = () => cy.request('/api/posts').its('body.posts')
  const deletePost = post =>
    cy.request('DELETE', `/api/delete/${post.id}`, {
      id: post.id,
      name: post.title
    })

  const deleteAllPosts = () => getAllPosts().each(deletePost)

  beforeEach(deleteAllPosts)

  it('should allow a user to get all blog posts', () => {
    cy.request('POST', '/api/add', {
      title: post.title,
      category: post.category,
      image_url: post.image_url,
      content: post.content
    })

    cy.request('/api/posts').as('posts')
    cy.get('@posts').its('status').should('equal', 200)
    cy.get('@posts').its('body.posts.length').should('equal', 1)
  })

  it('should allow a user to create a new blog post', () => {
    cy.request('POST', '/api/add', post).as('newPost')
    cy.get('@newPost').its('status').should('equal', 200)
    cy.get('@newPost')
      .its('body.message')
      .should('be.equal', `The blog "${post.title}" was successfully added`)
  })

  it('should allow a user to delete a blog post', () => {
    cy.request('POST', '/api/add', post)

    getAllPosts().each(post =>
      cy
        .request('DELETE', `/api/delete/${post.id}`, {
          id: post.id,
          title: post.title
        })
        .then(response => {
          expect(response.status).equal(200)
          expect(response.body.message).equal(
            `post "${post.title}" successfully deleted`
          )
        })
    )
  })

  it('should allow a user to get a single blog post', () => {
    cy.request('POST', '/api/add', post)

    getAllPosts().each(post =>
      cy
        .request(`/api/post/${post.id}`)
        .its('body.post.title')
        .should('equal', post.title)
    )
  })
})
