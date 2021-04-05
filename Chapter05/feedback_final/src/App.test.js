import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import faker from 'faker'
import App from './App'

test('Form, given valid submitted values, displays "thanks" message', async () => {
  // Arrange
  render(<App />)
  const fakeName = faker.name.firstName()
  const fakeEmail = faker.internet.email()
  const fakeComment = faker.lorem.sentence()
  const getRating = () => {
    const ratings = ['Awesome', 'Good', 'Bad']
    return ratings[Math.floor(Math.random() * ratings.length)]
  }
  // Act
  user.type(screen.getByRole('textbox', { name: /name/i }), fakeName)
  user.type(screen.getByRole('textbox', { name: /email/i }), fakeEmail)
  user.selectOptions(
    screen.getByRole('combobox', { name: /rating/i }),
    getRating()
  )
  user.type(screen.getByRole('textbox', { name: /comments/i }), fakeComment)
  user.click(screen.getByRole('button', { name: /submit/i }))

  // Assert
  let thanksMessage = await screen.findByText(
    `We appreciate your responses ${fakeName}!`
  )

  expect(thanksMessage).toBeInTheDocument()
})

test.each`
  inputLabel
  ${'Name'}
  ${'Email'}
  ${'Rating'}
  ${'Comments'}
`(
  'Form, given blank $inputLabel input value, displays error message',
  async ({ inputLabel }) => {
    render(<App />)

    user.click(screen.getByText(`${inputLabel} *`))
    user.tab()

    const errorMessage = await screen.findByText(`${inputLabel} Required`)
    expect(errorMessage).toBeInTheDocument()
  }
)
test.each`
  value
  ${'a'}
  ${'a@b'}
  ${'a@b.c'}
`(
  'Email Input, given invalid value "$value", displays error message',
  async ({ value }) => {
    render(<App />)
    const emailInput = screen.getByRole('textbox', { name: /email/i })

    user.click(emailInput)
    user.tab()
    user.type(emailInput, value)

    const errorMessage = await screen.findByText(/invalid email address/i)
    expect(errorMessage).toBeInTheDocument()
  }
)
