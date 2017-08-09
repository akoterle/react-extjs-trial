import { connect } from 'react-redux'
import DragHost from '../components/DragHost'
import * as actions from '../actions'

const mapStateToProps = (state) => ({
  dragText: state.drag.dragText
})

const mapDispatchToProps = (dispatch) => {

  const dispatchers = function (dispatch) {
    let dragMove = function (source, info) {
      dispatch(actions.dragMove(source, info))
    }
    let dragEnd = function (source) {
      dispatch(actions.dragEnd(source))
    }
    return {
      dragMove,
      dragEnd
    }
  }

  return { handlers: dispatchers(dispatch) }
}

const DragApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(DragHost)

export default DragApp