class PostDetailPage {
  deletePost() {
    cy.findByText(/delete post>/i).click()
  }
}

export const postDetailPage = new PostDetailPage()
