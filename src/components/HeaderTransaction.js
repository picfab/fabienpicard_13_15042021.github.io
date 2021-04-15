import PropTypes from 'prop-types'

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
    amount: PropTypes.string,
    description: PropTypes.number,
    nb: PropTypes.number,
  }).isRequired,
}
