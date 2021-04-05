import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import CustomerTable from './CustomerTable'

describe('CustomerTable', () => {
  const fakeCustomers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@mail.com',
      address: '123 John Street',
      phone: '(111) 1111111',
      avatar: 'http://dummyimage.com/235x233.jpg/ff4444/ffffff'
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane@mail.com',
      address: '456 Jane Street',
      phone: '(222) 2222222',
      avatar: 'http://dummyimage.com/235x233.jpg/ff4444/ffffff'
    },
    {
      id: 3,
      name: 'Sam Jones',
      email: 'jones22@mail.com',
      address: '789 Sam Street',
      phone: '(333) 3333333',
      avatar: 'http://dummyimage.com/235x233.jpg/ff4444/ffffff'
    }
  ]
  test('given data, renders table rows', () => {
    render(<CustomerTable data={fakeCustomers} />)

    expect(screen.getAllByTestId('row').length).toEqual(3)
  })

  test('given single-matching query, single result returned', () => {
    render(<CustomerTable data={fakeCustomers} />)
    const searchBox = screen.getByRole('textbox')

    user.type(searchBox, 'john')
    expect(screen.queryAllByTestId('row').length).toEqual(1)
  })

  test('given multi-matching query, multiple results returned', () => {
    render(<CustomerTable data={fakeCustomers} />)
    const searchBox = screen.getByRole('textbox')

    user.type(searchBox, 'doe')
    expect(screen.getAllByTestId('row').length).toEqual(2)

    user.clear(searchBox)
    user.type(searchBox, '22')
    expect(screen.getAllByTestId('row').length).toEqual(2)
  })

  test('given non-matching query, no results returned', () => {
    render(<CustomerTable data={fakeCustomers} />)
    const searchBox = screen.getByRole('textbox')

    user.type(searchBox, 'zzz')
    expect(screen.queryAllByTestId('row').length).toEqual(0)
  })
})
