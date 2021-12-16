import { v4 as uuidv4} from 'uuid'
import { createContext, useState } from 'react'

const FeedbackContext =  createContext()

export const FeedBackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      id: 2,
      rating: 9,
      text: 'Consequuntur vel vitae commodi alias.',
    },
    {
      id: 3,
      rating: 7,
      text: 'Lorem ipsum dolor sit amet consectetur.',
    },
  ])
  
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  
  return <FeedbackContext.Provider value={{
    feedback,
    deleteFeedback,
    addFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext