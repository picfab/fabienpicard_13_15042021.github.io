import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import HeaderProfile from '../components/HeaderProfile'
import ItemListTransaction from '../components/ItemListTransaction'
import { userSelector } from '../store/userSelectors'
import {
  updateDataUserAction,
  logoutUserAction,
  logUserAction,
} from '../store/userActions'
import { verifUser } from '../controllers/verifuser'

export default function User() {
  const [wait, setWait] = useState(true)
  const user = useSelector(userSelector)
  const dispatch = useDispatch()
  const history = useHistory()
  const refView = useRef()

  useEffect(() => {
    if (user.data && wait) {
      setWait(false)
    }
    verifUser(
      user,
      dispatch,
      history,
      updateDataUserAction,
      logoutUserAction,
      logUserAction
    )
  }, [user, wait, dispatch, history])

  const { firstName, lastName } = user.data
  return (
    <>
      <Nav />
      <main className='main bg-dark' ref={refView}>
        {wait ? (
          'Wait'
        ) : (
          <>
            <HeaderProfile
              firstName={firstName}
              lastName={lastName}
              refView={refView}
            />
            <h2 className='sr-only'>Accounts</h2>
            <ItemListTransaction
              title='Argent Bank Checking'
              nb='8349'
              amount='2,082.79'
              description='Available Balance'
            />
            <ItemListTransaction
              title='Argent Bank Savings'
              nb='6712'
              amount='10,928.42'
              description='Available Balance'
            />
            <ItemListTransaction
              title='Argent Bank Credit Card'
              nb='8349'
              amount='184.30'
              description='Current Balance'
            />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
