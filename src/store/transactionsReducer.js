const transactionsMock = [
  {
    id: 1,
    category: {
      id: 1,
      name: 'Food',
    },
    balance: 2200,
    type: 'Electronic',
    description: 'Golden Sun Bakery',
    notes: 'A note about Golden Sun Bakery',
    amount: 5.15,
    date: 1617173013966,
  },
  {
    id: 2,
    category: {
      id: 1,
      name: 'Food',
    },
    balance: 2000,
    type: 'Electronic',
    description: 'Golden Sun Bakery',
    notes: 'A note about Golden Sun Bakery',
    amount: 5.15,
    date: 1617173013966,
  },
  {
    id: 3,
    category: {
      id: 1,
      name: 'Food',
    },
    balance: 1900,
    type: 'Electronic',
    description: 'Golden Sun Bakery',
    notes: 'A note about Golden Sun Bakery',
    amount: 5.15,
    date: 1617173013966,
  },
]

export const UPDATE_TRANSACTION_ACTION = 'UPDATE_TRANSACTION_ACTION'

export function transactionsReducer(state = transactionsMock, action) {
  let newState
  switch (action.type) {
    case UPDATE_TRANSACTION_ACTION:
      newState = state.map((x) => {
        if (x.id === action.payload.id) {
          return action.payload
        }
        return x
      })
      return [...newState]

    default:
      return state
  }
}
