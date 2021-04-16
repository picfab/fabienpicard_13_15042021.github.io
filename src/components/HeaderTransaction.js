import PropTypes from 'prop-types'

/**
 * Create a Header for the Transaction view
 * @module HeaderTransaction
 * @component
 * @param {object} props
 * @prop {object} props.data
 * @prop {string} props.data.title
 * @prop {number} props.data.amount
 * @prop {string} props.data.description
 * @prop {number} props.data.nb
 * @example
 * return (
 *   <HeaderTransaction data={{title: 'Argent Bank Checking', amount: 2082.79, description: 'Available Balance', nb: 8349}} />
 * )
 */
export default function HeaderTransaction({ data }) {
  const { title, amount, description, nb } = data
  return (
    <section className='account headaccount'>
      <div className='account-content-wrapper'>
        <h1 className='account-title'>
          {title} (x{nb})
        </h1>
        <p className='account-amount'>${amount}</p>
        <p className='account-amount-description'>{description}</p>
      </div>
    </section>
  )
}

HeaderTransaction.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    amount: PropTypes.number,
    description: PropTypes.string,
    nb: PropTypes.number,
  }).isRequired,
}
