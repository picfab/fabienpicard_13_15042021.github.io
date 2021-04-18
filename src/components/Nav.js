import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { logoutUserAction } from '../store/userActions'
import { userSelector } from '../store/userSelectors'
import argentBankLogo from '../img/argentBankLogo.png'
/**
 * Create a Navigation section
 * @module Footer
 * @component
 * @example
 * return (
 *   <Nav />
 * )
 */
export default function Nav() {
  const history = useHistory()
  const location = useLocation()
  const user = useSelector(userSelector)
  const dispatch = useDispatch()
  const logout = (e) => {
    e.preventDefault()
    dispatch(logoutUserAction())
    localStorage.removeItem('token')
    history.push('/')
  }
  return (
    <nav className='main-nav'>
      <Link className='main-nav-logo' to='/'>
        <img
          className='main-nav-logo-image'
          src={argentBankLogo}
          alt='Argent Bank Logo'
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      <div>
        {!user.token ? (
          <Link className='main-nav-item' to='/signin/'>
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </Link>
        ) : (
          <>
            {location.pathname !== '/profile' && user.data && (
              <Link className='main-nav-item' to='/profile/'>
                <FontAwesomeIcon icon={faUserCircle} />
                {user.data.firstName}
              </Link>
            )}
            <span
              role='button'
              tabIndex='0'
              onKeyDown={logout}
              className='main-nav-item'
              onClick={logout}>
              <FontAwesomeIcon icon={faSignOutAlt} />
              Sign Out
            </span>
          </>
        )}
      </div>
    </nav>
  )
}
