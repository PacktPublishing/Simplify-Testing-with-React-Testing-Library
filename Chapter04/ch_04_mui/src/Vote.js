import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import PropTypes from 'prop-types'
import * as React from 'react'

const Vote = ({ totalGlobalLikes }) => {
  const likeReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_LIKE':
        return {
          ...state,
          totalLikes: state.totalLikes + 1,
          hasVotedDislike: false
        }
      case 'FINAL_LIKE':
        return {
          ...state,
          totalLikes: state.totalLikes + 1,
          hasVotedLike: true
        }
      case 'ADD_DISLIKE':
        return {
          ...state,
          totalLikes: state.totalLikes - 1,
          hasVotedLike: false
        }
      case 'FINAL_DISLIKE':
        return {
          ...state,
          totalLikes: state.totalLikes - 1,
          hasVotedDislike: true
        }

      default:
        return state
    }
  }

  const [state, dispatch] = React.useReducer(likeReducer, {
    initialLikes: totalGlobalLikes,
    totalLikes: totalGlobalLikes
  })

  const { totalLikes, hasVotedLike, hasVotedDislike } = state
  const voteLike = () => {
    if (state.totalLikes + 1 < state.initialLikes + 1) {
      dispatch({ type: 'ADD_LIKE' })
    } else {
      dispatch({ type: 'FINAL_LIKE' })
    }
  }
  const voteDislike = () => {
    if (state.totalLikes - 1 >= state.initialLikes) {
      dispatch({ type: 'ADD_DISLIKE' })
    } else {
      dispatch({ type: 'FINAL_DISLIKE' })
    }
  }

  return (
    <div>
      <Box display="flex" flexDirection="column" css={{ width: 100 }}>
        <Button
          aria-label="thumbs up"
          onClick={() => voteLike()}
          disabled={hasVotedLike}
          variant="contained"
          color="primary"
        >
          <ThumbUpIcon />
        </Button>
        <Typography variant="h3" align="center">
          {totalLikes}
        </Typography>
        <Button
          aria-label="thumbs down"
          onClick={() => voteDislike()}
          disabled={hasVotedDislike}
          variant="contained"
          color="primary"
        >
          <ThumbDownAltIcon />
        </Button>
      </Box>
    </div>
  )
}

Vote.propTypes = {
  totalGlobalLikes: PropTypes.number.isRequired
}

export default Vote
