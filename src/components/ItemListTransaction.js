import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

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
