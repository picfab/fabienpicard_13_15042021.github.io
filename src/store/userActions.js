import {
  LOG_USER_ACTION,
  UPDATE_DATA_USER_ACTION,
  LOGOUT_USER_ACTION,
} from './userReducer'

export const logUserAction = (token) => {
  localStorage.setItem('token', token)
  return {
    type: LOG_USER_ACTION,
    payload: { token },
  }
}
export const updateDataUserAction = (data) => ({
  type: UPDATE_DATA_USER_ACTION,
  payload: { ...data },
})
export const logoutUserAction = () => {
  localStorage.removeItem('token')
  return { type: LOGOUT_USER_ACTION }
}
