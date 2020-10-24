import { render, screen } from '@testing-library/react'
import Jumbotron from './Jumbotron'

it('displays the logo', () => {
  render(<Jumbotron />)

  const logo = screen.getByRole('heading', { name: /logo/i })

  expect(logo).toBeInTheDocument()
})

it('displays the nav links', () => {
  render(<Jumbotron />)

  expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /features/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
})

it('displays the heading', () => {
  render(<Jumbotron />)

  expect(
    screen.getByRole('heading', { name: /welcome to our site!/i })
  ).toBeInTheDocument()
})

it('displays the get started button', () => {
  render(<Jumbotron />)

  expect(
    screen.getByRole('button', { name: /get started/i })
  ).toBeInTheDocument()
})
