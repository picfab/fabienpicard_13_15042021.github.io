import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import HeaderTransaction from '../components/HeaderTransaction'
import { transactionsSelector } from '../store/transactionsSelectors'
import { userSelector } from '../store/userSelectors'
import {
  updateDataUserAction,
  logoutUserAction,
  logUserAction,
} from '../store/userActions'
import ItemTransaction from '../components/ItemTransaction'
import { verifUser } from '../controllers/verifuser'

export default function Transactions() {
  const location = useLocation()
  const [wait, setWait] = useState(true)
  const user = useSelector(userSelector)
  const transactions = useSelector(transactionsSelector)

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
    if (!location.state) {
      history.push('/signin')
    }
  }, [user, wait, dispatch, history, location])

  return (
    <>
      <Nav />
      <main className='main bg-light' ref={refView}>
        {wait ? (
          'Wait'
        ) : (
          <>
            {location.state && <HeaderTransaction data={location.state} />}
            <div className='listContent'>
              <div className='listContent__header'>
                <div className='listContent__line'>
                  <div className='listContent__date'>Date</div>
                  <div className='listContent__description'>Description</div>
                  <div className='listContent__amount'>Amount</div>
                  <div className='listContent__balance'>Balance</div>
                </div>
              </div>
              <div className='listContent__accordions'>
                {transactions.map((transaction) => (
                  <ItemTransaction transaction={transaction} />
                ))}
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
