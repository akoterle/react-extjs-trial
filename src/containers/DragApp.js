import { connect } from 'react-redux'
import { dragMove, dragEnd } from '../actions'
import DragHost from '../components/DragHost'


// const DragApp = ({ dragText, onDragMove, onDragEnd }) => {

// }


const mapStateToProps = (state) => ({
    dragText: state.drag.dragText
})

const mapDispatchToProps = {
  onDragMove: dragMove,
  onDragEnd: dragEnd
}

const DragApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(DragHost)

export default DragApp