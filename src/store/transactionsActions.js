/* eslint-disable import/prefer-default-export */
import { UPDATE_TRANSACTION_ACTION } from './transactionsReducer'

export const UpdateTransactionAction = (transaction) => ({
  type: UPDATE_TRANSACTION_ACTION,
  payload: transaction,
})
