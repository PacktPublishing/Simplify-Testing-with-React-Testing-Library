import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import stubThumbsUp from './images/thumbs-up.svg'
import VoteBtn from './VoteBtn'

describe('Vote Button', () => {
  test('given image and vote status, renders button to screen', () => {
    const stubHandleVote = jest.fn()
    const stubAltText = 'vote like'

    render(
      <VoteBtn
        handleVote={stubHandleVote}
        hasVoted={false}
        imgSrc={stubThumbsUp}
        altText={stubAltText}
      />
    )
    const image = screen.getByRole('img', { name: stubAltText })
    const button = screen.getByRole('button', { name: stubAltText })

    expect(image).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(button).toBeEnabled()
  })

  test('given clicked button, invokes handleVote', () => {
    const mockHandleVote = jest.fn()
    render(
      <VoteBtn
        handleVote={mockHandleVote}
        hasVoted={false}
        imgSrc={stubThumbsUp}
        altText="vote like"
      />
    )

    user.click(screen.getByRole('button', { name: /vote like/i }))

    expect(mockHandleVote).toHaveBeenCalled()
    expect(mockHandleVote).toHaveBeenCalledTimes(1)
  })
})
