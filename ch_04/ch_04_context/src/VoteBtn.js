import PropTypes from 'prop-types'

const VoteBtn = props => {
  return (
    <button
      onClick={props.handleVote}
      disabled={props.hasVoted}
      className={props.hasVoted ? 'bg-info' : null}
    >
      <img src={props.imgSrc} alt={props.altText} />
    </button>
  )
}
VoteBtn.propTypes = {
  handleVote: PropTypes.func.isRequired,
  hasVoted: PropTypes.bool,
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired
}
export default VoteBtn
