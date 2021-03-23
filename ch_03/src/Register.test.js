import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import Register from './Register'

describe('Registration', () => {
  test('given submitted form, invokes handleRegister', () => {
    const mockHandleRegister = jest.fn()
    const mockValues = {
      email: 'john@mail.com',
      password: '123'
    }

    render(<Register handleRegister={mockHandleRegister} />)

    user.type(screen.getByLabelText('Email Address'), mockValues.email)
    user.type(screen.getByLabelText('Create Password'), mockValues.password)
    user.click(screen.getByRole('button', { name: /submit/i }))

    expect(mockHandleRegister).toHaveBeenCalledWith({
      email: mockValues.email,
      password: mockValues.password
    })
    expect(mockHandleRegister).toHaveBeenCalledTimes(1)
  })
})
