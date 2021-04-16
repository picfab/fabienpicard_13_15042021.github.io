/* eslint-disable import/prefer-default-export */

/**
 * Verify if user are connected a token in local storage is valid.<br/>
 * And redirect if the user can't acces to an user page
 * @function verifUser
 * @prop {object} user From user's store
 * @prop {function} dispatch Function for connected to redux's dispatch
 * @prop {object} history Object from react-router for redirect user
 * @prop {function} updateDataUserAction Action for update user and set user's store
 * @prop {function} logoutUserAction Action for logout user and set user's store
 * @prop {function} logUserAction Action for login user and set user's store
 * @return  {null}
 */

export function verifUser(
  user,
  dispatch,
  history,
  updateDataUserAction,
  logoutUserAction,
  logUserAction
) {
  const tokenLocal = localStorage.getItem('token')
  if (user.token || tokenLocal) {
    if (!user.token) {
      dispatch(logUserAction(tokenLocal))
    }
    if (!user.data) {
      const id = user.token ? user.token : tokenLocal
      const myHeaders = new Headers()
      myHeaders.append('Authorization', `Bearer ${id}`)
      myHeaders.append('Cookie', 'cxssh_status=off')

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
      }
      fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.status === 200) {
            dispatch(updateDataUserAction(result.body))
          } else {
            dispatch(logoutUserAction())
          }
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          dispatch(logoutUserAction())
        })
    }
  }
  if (!user.token && !localStorage.getItem('token')) {
    dispatch(logoutUserAction())
    history.push('/signin')
  }
}
