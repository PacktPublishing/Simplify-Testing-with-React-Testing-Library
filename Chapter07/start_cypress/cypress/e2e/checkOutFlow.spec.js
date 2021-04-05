import user from '../support/user'

describe('Checkout Flow', () => {
  it('allows a user to enter address and payment info and place an order', () => {
    cy.visit('/')

    // Enter Address
    cy.findByRole('textbox', { name: /first name/i }).type(user.firstName)
    cy.findByRole('textbox', { name: /last name/i }).type(user.lastName)
    cy.findByRole('textbox', { name: /address line 1/i }).type(user.address1)
    cy.findByRole('textbox', { name: /city/i }).type(user.city)
    cy.findByRole('textbox', { name: /state/i }).type(user.state)
    cy.findByRole('textbox', { name: /postal code/i }).type(user.zipCode)
    cy.findByRole('textbox', { name: /country/i }).type(user.country)
    cy.findByText(/next/i).click()

    // Enter Payment Info
    cy.findByRole('textbox', { name: /card type/i }).type(user.cardType)
    cy.findByRole('textbox', { name: /name on card/i }).type(user.cardHolder)
    cy.findByRole('textbox', { name: /card number/i }).type(user.cardNumber)
    cy.findByRole('textbox', { name: /expiration date/i }).type(user.expiryDate)
    cy.findByRole('textbox', { name: /cvv/i }).type(user.cardCvv)
    cy.findByText(/next/i).click()

    // Verify Shipping Details
    cy.findByText(`${user.firstName} ${user.lastName}`).should('be.visible')
    cy.findByText(user.address1).should('be.visible')
    cy.findByText(`${user.city}, ${user.state} ${user.zipCode}`).should(
      'be.visible'
    )
    cy.findByText(user.country).should('be.visible')

    // Verify Payment Details
    cy.findByText(user.cardType).should('be.visible')
    cy.findByText(user.cardHolder).should('be.visible')
    cy.findByText(user.cardNumber).should('be.visible')
    cy.findByText(user.expiryDate).should('be.visible')
    cy.findByText(/place order/i).click()

    // Verify Order Submitted
    cy.findByRole('heading', { name: /thank you for your order/i }).should(
      'be.visible'
    )
    cy.findByRole('heading', { name: /your order number is #2001539/i }).should(
      'be.visible'
    )
  })
})
