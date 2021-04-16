import PropTypes from 'prop-types'
import React from 'react'
import { useDispatch } from 'react-redux'
import InputText from './InputText'
import SelectCat from './SelectCat'
import Accordion from './Accordion'
import { UpdateTransactionAction } from '../store/transactionsActions'

function checker(x) {
  if (x > 3 && x < 21) return 'th'
  switch (x % 10) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}

function dateApp(date) {
  const newDate = new Date(date)
  const formatDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
  const dateString = formatDate
    .formatToParts(newDate)
    .map(({ type, value }) => {
      switch (type) {
        case 'day':
          return value + checker(value)
        default:
          return value
      }
    })
    .reduce((string, part) => string + part)
  return dateString
}

/**
 * Create a Header for the Transaction view
 * @module ItemTransaction
 * @component
 * @param {object} props
 * @prop {object} props.transaction
 * @example
 * return (
 *   <ItemTransaction
 *       transaction={{
 *         amount: 5.15,
 *         balance: 2000,
 *         category: {id: 1, name: "Food"},
 *         date: 1617173013966,
 *         description: "Golden Sun Bakery",
 *         id: 2,
 *         notes: "A note about Golden Sun Bakery",
 *         type: "Electronic",
 *       }}
 *       />
 * )
 */
export default function ItemTransaction({ transaction }) {
  const dispatch = useDispatch()
  const valid = (transac) => {
    /**
     * fetch API for update transaction before dispatch
     */
    dispatch(UpdateTransactionAction(transac))
  }
  return (
    <Accordion
      key={transaction.id}
      title={
        <div className='listContent__line'>
          <div className='listContent__date'>{dateApp(transaction.date)}</div>
          <div className='listContent__description'>
            {transaction.description}
          </div>
          <div className='listContent__amount'>${transaction.amount}</div>
          <div className='listContent__balance'>${transaction.balance}</div>
        </div>
      }
      content={
        <div className='listContent__content'>
          <div className='listContent__type'>
            Transaction Type: {transaction.type}
          </div>
          <div className='listContent__category'>
            Category :{' '}
            <SelectCat
              value={transaction.category}
              transaction={transaction}
              type='category'
              onValid={valid}
            />
          </div>
          <div className='listContent__note'>
            Note :{' '}
            <InputText transaction={transaction} type='notes' onValid={valid} />
          </div>
        </div>
      }
    />
  )
}

ItemTransaction.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  transaction: PropTypes.object.isRequired,
}
