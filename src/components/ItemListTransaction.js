import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/**
 * Create a Header for the Transaction view
 * @module ItemListTransaction
 * @component
 * @param {object} props
 * @prop {string} props.title
 * @prop {string} props.description
 * @prop {number} props.amount
 * @prop {number} props.nb
 * @example
 * return (
 *   <ItemListTransaction
 *       title='Argent Bank Checking'
 *       amount={5.15}
 *       description: "Available Balance"
 *       nb={8349}
 *       />
 * )
 */
export default function ItemListTransaction({
  title,
  amount,
  description,
  nb,
}) {
  return (
    <section className='account'>
      <div className='account-content-wrapper'>
        <h3 className='account-title'>
          {title} (x{nb})
        </h3>
        <p className='account-amount'>${amount}</p>
        <p className='account-amount-description'>{description}</p>
      </div>
      <div className='account-content-wrapper cta'>
        <Link
          to={{
            pathname: '/transactions/',
            state: {
              title,
              amount,
              description,
              nb,
            },
          }}
          className='transaction-button'>
          View transactions
        </Link>
      </div>
    </section>
  )
}
ItemListTransaction.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  nb: PropTypes.number.isRequired,
}
