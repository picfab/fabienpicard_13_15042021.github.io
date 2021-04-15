const initialState = {}

export const LOG_USER_ACTION = 'LOG_USER_ACTION'
export const UPDATE_DATA_USER_ACTION = 'UPDATE_DATA_USER_ACTION'
export const LOGOUT_USER_ACTION = 'LOGOUT_USER_ACTION'

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_USER_ACTION:
      return { ...state, token: action.payload.token }
    case UPDATE_DATA_USER_ACTION:
      return { ...state, data: action.payload }
    case LOGOUT_USER_ACTION:
      return {}

    default:
      return state
  }
}
