import PropTypes from 'prop-types'
import Card from "./shared/Card"

const Feedbackitem = ({ item }) => {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

Feedbackitem.propTypes = {
  item: PropTypes.object.isRequired
}

export default Feedbackitem
