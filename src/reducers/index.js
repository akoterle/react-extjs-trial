import { combineReducers } from 'redux'
import drag from './drag'
import fetcher from './fetcher'

const rootReducers = combineReducers({
  drag,
  fetcher
})

export default rootReducers