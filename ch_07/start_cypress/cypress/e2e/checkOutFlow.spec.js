import user from '../support/user'

describe('Checkout Flow', () => {
  it('allows a user to enter address and payment info and place an order', () => {
    cy.visit('/')

    // Enter Address
    cy.get('input[name="firstName"]').type(user.firstName)
    cy.get('input[name="lastName"]').type(user.lastName)
    cy.get('input[name="address1"]').type(user.address1)
    cy.get('input[name="city"]').type(user.city)
    cy.get('input[name="state"]').type(user.state)
    cy.get('input[name="zipCode"]').type(user.zipCode)
    cy.get('input[name="country"]').type(user.country)
    cy.contains(/next/i).click()

    // Enter Payment Info
    cy.get('input[name="cardType"]').type(user.cardType)
    cy.get('input[name="cardHolder"]').type(user.cardHolder)
    cy.get('input[name="cardNumber"]').type(user.cardNumber)
    cy.get('input[name="expiryDate"]').type(user.expiryDate)
    cy.get('input[name="cardCvv"]').type(user.cardCvv)
    cy.contains(/next/i).click()

    // Verify Shipping Details
    cy.contains(`${user.firstName} ${user.lastName}`).should('be.visible')
    cy.contains(user.address1).should('be.visible')
    cy.contains(`${user.city}, ${user.state} ${user.zipCode}`).should(
      'be.visible'
    )
    cy.contains(user.country).should('be.visible')

    // Verify Payment Details
    cy.contains(user.cardType).should('be.visible')
    cy.contains(user.cardHolder).should('be.visible')
    cy.contains(user.cardNumber).should('be.visible')
    cy.contains(user.expiryDate).should('be.visible')
    cy.contains(/place order/i).click()

    // Verify Order Submitted
    cy.contains(/thank you for your order/i).should('be.visible')
    cy.contains(/your order number is #2001539/i).should('be.visible')
  })
})
