class AddPage {
  createNewPost(newPost) {
    cy.findByRole('textbox', { name: /title/i }).type(newPost.title)
    cy.findByRole('textbox', { name: /category/i }).type(newPost.category)
    cy.findByRole('textbox', { name: /image link/i }).type(newPost.image_url)
    cy.findByRole('textbox', { name: /content/i }).type(newPost.content)
    cy.findByRole('button', { name: /submit/i }).click()
  }
}

export const addPage = new AddPage()
