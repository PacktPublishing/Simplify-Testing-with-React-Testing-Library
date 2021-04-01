import * as React from 'react'
import thumbsDown from './images/thumbs-down.svg'
import thumbsUp from './images/thumbs-up.svg'
import { useLikes } from './LikesContext'
import VoteBtn from './VoteBtn.js'

const Vote = () => {
  const {
    state: { hasVotedLike, hasVotedDislike, totalLikes },
    voteLike,
    voteDislike
  } = useLikes()

  return (
    <div className="d-flex d-inline-flex flex-column h1 m-2">
      <VoteBtn
        handleVote={voteLike}
        hasVoted={hasVotedLike}
        imgSrc={thumbsUp}
        altText="thumbs up"
      />
      <span>{totalLikes}</span>
      <VoteBtn
        handleVote={voteDislike}
        hasVoted={hasVotedDislike}
        imgSrc={thumbsDown}
        altText="thumbs down"
      />
    </div>
  )
}

export default Vote
