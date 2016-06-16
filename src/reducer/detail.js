import * as T from 'actionType/detail'
import { handleActions } from 'redux-actions'

export const detailData = handleActions({
  [T.GETDETAIL]: (state, action) => action.payload
}, [])
