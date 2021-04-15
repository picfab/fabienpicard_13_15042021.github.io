/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { transactionsReducer } from './transactionsReducer'

export default createStore(
  combineReducers({
    user: userReducer,
    transactions: transactionsReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
