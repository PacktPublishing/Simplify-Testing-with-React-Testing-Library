import * as React from 'react'

const LikesContext = React.createContext()

function LikesProvider(props) {
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
  const initialState = {
    initialLikes: props.initialLikes,
    totalLikes: props.initialLikes
  }
  const [state, dispatch] = React.useReducer(likeReducer, initialState)

  const value = [state, dispatch]

  return <LikesContext.Provider value={value} {...props} />
}

function useLikes() {
  const context = React.useContext(LikesContext)

  if (!context) {
    throw new Error('useLikes be used used within the LikesProvider')
  }
  const [state, dispatch] = context

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

  return { state, voteLike, voteDislike }
}

export { LikesProvider, useLikes }
