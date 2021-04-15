/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userSelector } from '../store/userSelectors'
import { updateDataUserAction } from '../store/userActions'

export default function HeaderProfile({ firstName, lastName, refView }) {
  const [toggle, setToggle] = useState(false)
  const [firstNameTemp, setFirstNameTemp] = useState('')
  const [lastNameTemp, setLastNameTemp] = useState('')
  const user = useSelector(userSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    setFirstNameTemp(firstName)
    setLastNameTemp(lastName)
  }, [firstName, lastName])

  const handleToogle = () => {
    if (!toggle) {
      // eslint-disable-next-line react/prop-types
      refView.current.classList.remove('bg-dark')
      // eslint-disable-next-line react/prop-types
      refView.current.classList.add('bg-light')
    } else {
      // eslint-disable-next-line react/prop-types
      refView.current.classList.add('bg-dark')
      // eslint-disable-next-line react/prop-types
      refView.current.classList.remove('bg-light')
    }
    setToggle(!toggle)
  }
  const save = (e) => {
    e.preventDefault()
    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${user.token}`)
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('Cookie', 'cxssh_status=off')

    const raw = JSON.stringify({
      firstName: firstNameTemp,
      lastName: lastNameTemp,
    })

    const requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    }

    fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        dispatch(updateDataUserAction(result.body))
        handleToogle()
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log('error', error))
  }

  return (
    <div className='header'>
      <h1>
        Welcome back
        <br />
        {!toggle && `${firstName} ${lastName}`}
      </h1>
      {!toggle ? (
        <button
          onKeyDown={handleToogle}
          className='edit-button'
          onClick={handleToogle}>
          Edit Name
        </button>
      ) : (
        <div className='edit-form'>
          <input
            type='text'
            placeholder='First name'
            value={firstNameTemp}
            onChange={(e) => setFirstNameTemp(e.target.value)}
          />
          <input
            type='text'
            placeholder='Last name'
            value={lastNameTemp}
            onChange={(e) => setLastNameTemp(e.target.value)}
          />
          <button className='accept-button' onClick={save} onKeyDown={save}>
            Save
          </button>
          <button
            className='cancel-button'
            onClick={handleToogle}
            onKeyDown={handleToogle}>
            Cancel
          </button>
        </div>
      )}
    </div>
  )
}

HeaderProfile.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  refView: PropTypes.shape({ current: PropTypes.instanceOf(HTMLElement) })
    .isRequired,
}
