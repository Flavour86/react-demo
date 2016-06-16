import * as T from 'actionType/list'
import { handleActions } from 'redux-actions'

export const listData = handleActions({
  [T.GETLIST]: (state, action) => action.payload
}, [])
