import { connect } from 'react-redux'
import { dragMove, dragEnd } from '../actions'
import DragContainer from '../components/DragContainer'


const mapStateToProps = (state) => ({
    dragText: state.dragText
})

const mapDispatchToProps = {
  onDragMove: dragMove,
  onDragEnd: dragEnd
}

const DragApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(DragContainer)

export default DragApp