import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { LikesProvider } from './LikesContext'
import Vote from './Vote'

describe('Vote', () => {
  test('given up vote, total likes increases by one', () => {
    render(
      <LikesProvider initialLikes={10}>
        <Vote />
      </LikesProvider>
    )
    const thumbsUpBtn = screen.getByRole('button', { name: /thumbs up/i })

    user.click(thumbsUpBtn)
    user.click(thumbsUpBtn)

    expect(screen.getByText(/11/i)).toBeInTheDocument()
    expect(thumbsUpBtn).toHaveClass('bg-info')
  })

  test('given down vote, total likes decreases by one', () => {
    render(
      <LikesProvider initialLikes={10}>
        <Vote />
      </LikesProvider>
    )
    const thumbsDownBtn = screen.getByRole('button', { name: /thumbs down/i })

    user.click(thumbsDownBtn)
    user.click(thumbsDownBtn)

    expect(screen.getByText(/9/i)).toBeInTheDocument()
    expect(thumbsDownBtn).toHaveClass('bg-info')
  })

  test('given retracted up vote, original total likes restored', () => {
    render(
      <LikesProvider initialLikes={10}>
        <Vote />
      </LikesProvider>
    )

    const thumbsUpBtn = screen.getByRole('button', { name: /thumbs up/i })
    const thumbsDownBtn = screen.getByRole('button', { name: /thumbs down/i })

    user.click(thumbsUpBtn)
    user.click(thumbsDownBtn)

    expect(screen.getByText(/10/i)).toBeInTheDocument()
  })

  test('given retracted down vote, original total likes restored', () => {
    render(
      <LikesProvider initialLikes={10}>
        <Vote />
      </LikesProvider>
    )

    const thumbsUpBtn = screen.getByRole('button', { name: /thumbs up/i })
    const thumbsDownBtn = screen.getByRole('button', { name: /thumbs down/i })

    user.click(thumbsDownBtn)
    user.click(thumbsUpBtn)

    expect(screen.getByText(/10/i)).toBeInTheDocument()
  })
})
