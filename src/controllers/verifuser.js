// eslint-disable-next-line import/prefer-default-export
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
