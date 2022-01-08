// import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import FeedbackItem from "./FeedbackItem"
import { Spinner } from './shared/Spinner'

const FeedbackList = () => {
  const { feedback, isLoading } = useContext(FeedbackContext)

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>
  }
  return isLoading ? ( <Spinner /> ) : (
   <div className="feedback-list">
    {feedback.map((item) => (
      <FeedbackItem
      key={item.id}
      item={item}/>
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
