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
  
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  
  // Update item
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem } : item))
  } 
  

  // This will set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }
  
  return <FeedbackContext.Provider value={{
    feedback,
    feedbackEdit,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext