import { render, screen } from '@testing-library/react'
import employees from './mocks/employees'
import Table from './Table'

const [firstResult] = employees

it('Table, given data, renders table rows', () => {
  render(<Table employees={[firstResult]} />)

  expect(
    screen.getByRole('cell', { name: firstResult.name })
  ).toBeInTheDocument()
  expect(
    screen.getByRole('cell', { name: firstResult.department })
  ).toBeInTheDocument()
  expect(
    screen.getByRole('cell', { name: firstResult.title })
  ).toBeInTheDocument()
})
