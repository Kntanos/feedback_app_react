// import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import FeedbackItem from "./FeedbackItem"

const FeedbackList = ({ handleDelete }) => {
  const { feedback } = useContext(FeedbackContext)

  if(!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem
        key={item.id}
        item={item}
        handleDelete={handleDelete} />
      ))}
    </div>
  )
}

// No longer needed because of Context
// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired
//     })
//   )
// }

export default FeedbackList
