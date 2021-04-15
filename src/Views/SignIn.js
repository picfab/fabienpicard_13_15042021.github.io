/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { logUserAction } from '../store/userActions'
import { userSelector } from '../store/userSelectors'

export default function SignIn() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const history = useHistory()
  const user = useSelector(userSelector)
  const emailRemenber = localStorage.getItem('mail')

  useEffect(() => {
    if (user.token) {
      history.push('/profile')
    }
    if (emailRemenber) {
      setEmail(emailRemenber)
      setRemember(true)
    }
    if (!user.token) {
      dispatch(logUserAction())
    }
  }, [user.token, history, emailRemenber, dispatch])

  const logUser = (e) => {
    e.preventDefault()
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('Cookie', 'cxssh_status=off')

    const raw = JSON.stringify({ email, password })

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    }

    fetch('http://localhost:3001/api/v1/user/login', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        dispatch(logUserAction(result.body.token))
        if (remember) {
          localStorage.setItem('mail', email)
        } else {
          localStorage.removeItem('mail')
        }
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log('error', error))
  }

  return (
    <>
      <Nav />
      <main className='main bg-dark'>
        <section className='sign-in-content'>
          <FontAwesomeIcon icon={faUserCircle} className='sign-in-icon' />
          <h1>Sign In</h1>
          <form>
            <div className='input-wrapper'>
              <label htmlFor='email'>email</label>
              <input
                required
                type='text'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='password'>Password</label>
              <input
                required
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='input-remember'>
              <input
                type='checkbox'
                id='remember-me'
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              <label htmlFor='remember-me'>Remember me</label>
            </div>
            <button
              type='button'
              className='sign-in-button'
              onKeyDown={logUser}
              onClick={logUser}>
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}
