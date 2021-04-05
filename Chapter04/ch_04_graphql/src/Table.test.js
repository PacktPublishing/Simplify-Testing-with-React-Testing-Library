import { MockedProvider } from '@apollo/client/testing'
import { act, render, screen } from '@testing-library/react'
import faker from 'faker'
import Table, { EMPLOYEES } from './Table'

const mocks = [
  {
    request: {
      query: EMPLOYEES
    },
    result: {
      data: {
        employees: [
          {
            id: faker.random.uuid(),
            name: faker.fake('{{name.firstName}} {{name.lastName}}'),
            department: faker.commerce.department(),
            title: faker.name.jobTitle()
          },
          {
            id: faker.random.uuid(),
            name: faker.fake('{{name.firstName}} {{name.lastName}}'),
            department: faker.commerce.department(),
            title: faker.name.jobTitle()
          }
        ]
      }
    }
  }
]
describe('Table', () => {
  test('given initial render, returns loading message', () => {
    render(
      <MockedProvider mocks={mocks}>
        <Table />
      </MockedProvider>
    )
    expect(screen.getByText(/Loading.../)).toBeInTheDocument()
  })

  test('given completed state, renders employee data', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <Table />
      </MockedProvider>
    )
    await act(() => new Promise(resolve => setTimeout(resolve, 0)))

    expect(screen.getAllByTestId('row').length).toEqual(2)
  })

  test('given error state, renders error message', async () => {
    const mocks = [{ request: { query: EMPLOYEES }, error: new Error() }]

    render(
      <MockedProvider mocks={mocks}>
        <Table />
      </MockedProvider>
    )
    await act(() => new Promise(resolve => setTimeout(resolve, 0)))

    expect(screen.getByText(/error/i)).toBeInTheDocument()
  })
})
