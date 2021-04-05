import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import Vote from './Vote'

describe('Vote', () => {
  test('given "up" vote, total likes increases by one', () => {
    render(<Vote totalGlobalLikes={10} />)

    user.click(screen.getByRole('button', { name: /thumbs up/i }))

    expect(screen.getByText(/11/i)).toBeInTheDocument()
  })

  test('given "down" vote, total likes decreases by one', () => {
    render(<Vote totalGlobalLikes={10} />)

    user.click(screen.getByRole('button', { name: /thumbs down/i }))

    expect(screen.getByText(/9/i)).toBeInTheDocument()
  })

  test('given vote, returns disabled vote buttons', () => {
    render(<Vote totalGlobalLikes={10} />)
    const thumbsUpBtn = screen.getByRole('button', { name: /thumbs up/i })
    const thumbsDownBtn = screen.getByRole('button', { name: /thumbs down/i })

    user.click(thumbsUpBtn)
    user.click(thumbsUpBtn)
    user.click(thumbsDownBtn)
    user.click(thumbsDownBtn)

    expect(screen.getByText(/11/i)).toBeInTheDocument()
  })
})
