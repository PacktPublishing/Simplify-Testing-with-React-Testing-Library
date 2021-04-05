import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import Vote from './Vote'

test('increases total likes by one', () => {
  render(<Vote totalGlobalLikes={10} />)

  expect(screen.getByText(/10/i)).toBeInTheDocument()
  user.click(screen.getByRole('button', { name: /thumbs up/i }))
  expect(screen.getByText(/11/i)).toBeInTheDocument()

  expect(screen.getByRole('button', { name: /thumbs up/i })).toHaveStyle(
    'background: green'
  )
})

test('decreases total likes by one', () => {
  render(<Vote totalGlobalLikes={10} />)

  expect(screen.getByText(/10/i)).toBeInTheDocument()
  user.click(screen.getByRole('button', { name: /thumbs down/i }))
  expect(screen.getByText(/9/i)).toBeInTheDocument()

  expect(screen.getByRole('button', { name: /thumbs down/i })).toHaveStyle(
    'background: red'
  )
})

test('A user can only vote once', () => {
  render(<Vote totalGlobalLikes={10} />)
  const thumbsUpBtn = screen.getByRole('button', { name: /thumbs up/i })
  const thumbsDownBtn = screen.getByRole('button', { name: /thumbs down/i })

  expect(screen.getByText(/10/i)).toBeInTheDocument()
  user.click(thumbsUpBtn)
  user.click(thumbsUpBtn)
  expect(screen.getByText(/11/i)).toBeInTheDocument()

  user.click(thumbsDownBtn)
  expect(screen.getByText(/11/i)).toBeInTheDocument()
})
