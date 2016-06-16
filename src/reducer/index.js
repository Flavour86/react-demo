import { combineReducers } from 'redux'
import * as home from './home'
import * as list from './list'
import * as detail from './detail'

export default combineReducers({
  ...home,
  ...list,
  ...detail
})

