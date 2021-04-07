import PropTypes from 'prop-types'
import * as React from 'react'
import thumbsDown from './images/thumbs-down.svg'
import thumbsUp from './images/thumbs-up.svg'
import VoteBtn from './VoteBtn'

const Vote = ({ totalGlobalLikes }) => {
  const likeReducer = (state, action) => {
    switch (action.type) {
      case 'LIKE':
        return {
          ...state,
          totalLikes: state.totalLikes + 1,
          hasVoted: true
        }
      case 'DISLIKE':
        return {
          ...state,
          totalLikes: state.totalLikes - 1,
          hasVoted: true
        }
      default:
        return state
    }
  }
  const [state, dispatch] = React.useReducer(likeReducer, {
    totalLikes: totalGlobalLikes,
    hasVoted: false
  })

  const { totalLikes, hasVoted } = state
  const handleVoteLike = () => dispatch({ type: 'LIKE' })
  const handleVoteDislike = () => dispatch({ type: 'DISLIKE' })

  return (
    <div className="h1">
      <h5>Note: You are not allowed to change your vote once selected!</h5>
      <VoteBtn
        handleVote={handleVoteLike}
        hasVoted={hasVoted}
        imgSrc={thumbsUp}
        altText="vote like"
      />
      <div>{totalLikes}</div>
      <VoteBtn
        handleVote={handleVoteDislike}
        hasVoted={hasVoted}
        imgSrc={thumbsDown}
        altText="vote dislike"
      />
    </div>
  )
}

Vote.propTypes = {
  totalGlobalLikes: PropTypes.number.isRequired
}

export default Vote
