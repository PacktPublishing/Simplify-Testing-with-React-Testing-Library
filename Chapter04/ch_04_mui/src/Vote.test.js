import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import Vote from './Vote'

describe('Vote', () => {
  test('given "up" vote, total likes increases by one', () => {
    render(<Vote totalGlobalLikes={10} />)
    const thumbsUpBtn = screen.getByRole('button', { name: /thumbs up/i })

    user.click(thumbsUpBtn)

    expect(screen.getByText(/11/i)).toBeInTheDocument()
  })

  test('given "down" vote, total likes decreases by one', () => {
    render(<Vote totalGlobalLikes={10} />)
    const thumbsDownBtn = screen.getByRole('button', { name: /thumbs down/i })

    user.click(thumbsDownBtn)

    expect(screen.getByText(/9/i)).toBeInTheDocument()
  })

  test('given multiple "down" votes, total likes only decrease by one', () => {
    render(<Vote totalGlobalLikes={10} />)
    const thumbsUpBtn = screen.getByRole('button', { name: /thumbs up/i })

    user.click(thumbsUpBtn)
    user.click(thumbsUpBtn)
    user.click(thumbsUpBtn)

    expect(screen.getByText(/11/i)).toBeInTheDocument()
  })

  test('given multiple "up" votes, total likes only increase by one', () => {
    render(<Vote totalGlobalLikes={10} />)
    const thumbsDownBtn = screen.getByRole('button', { name: /thumbs down/i })

    user.click(thumbsDownBtn)
    user.click(thumbsDownBtn)
    user.click(thumbsDownBtn)

    expect(screen.getByText(/9/i)).toBeInTheDocument()
  })

  test('given retracted "up" vote, returns original total likes', () => {
    render(<Vote totalGlobalLikes={10} />)

    const thumbsUpBtn = screen.getByRole('button', { name: /thumbs up/i })
    const thumbsDownBtn = screen.getByRole('button', { name: /thumbs down/i })

    user.click(thumbsUpBtn)
    user.click(thumbsDownBtn)

    expect(screen.getByText(/10/i)).toBeInTheDocument()
  })

  test('given retracted "down" vote, returns original total likes', () => {
    render(<Vote totalGlobalLikes={10} />)

    const thumbsUpBtn = screen.getByRole('button', { name: /thumbs up/i })
    const thumbsDownBtn = screen.getByRole('button', { name: /thumbs down/i })

    user.click(thumbsDownBtn)
    user.click(thumbsUpBtn)

    expect(screen.getByText(/10/i)).toBeInTheDocument()
  })
})
