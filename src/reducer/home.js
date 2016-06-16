import * as T from 'actionType/home'
import { handleActions } from 'redux-actions'

export const homeData = handleActions({
  [T.GETHOMEDATA]: (state, action) => action.payload
}, [])
