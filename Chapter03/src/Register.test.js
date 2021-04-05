import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import Register from './Register'

describe('Registration', () => {
  test('given submitted form, invokes handleRegister', () => {
    const mockHandleRegister = jest.fn()
    const mockUser = {
      email: 'john@mail.com',
      password: '123'
    }

    render(<Register handleRegister={mockHandleRegister} />)

    user.type(screen.getByLabelText('Email Address'), mockUser.email)
    user.type(screen.getByLabelText('Create Password'), mockUser.password)
    user.click(screen.getByRole('button', { name: /submit/i }))

    expect(mockHandleRegister).toHaveBeenCalledWith({
      email: mockUser.email,
      password: mockUser.password
    })
    expect(mockHandleRegister).toHaveBeenCalledTimes(1)
  })
})
