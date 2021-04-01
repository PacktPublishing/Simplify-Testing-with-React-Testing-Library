class PostDetailPage {
  deletePost() {
    cy.findByText(/delete post>/i).click()
    cy.visit('/')
  }
}

export const postDetailPage = new PostDetailPage()
