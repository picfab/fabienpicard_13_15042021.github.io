import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faCheck } from '@fortawesome/free-solid-svg-icons'

/**
 * Create a Header for the Transaction view
 * @module InputText
 * @component
 * @param {object} props
 * @prop {function} props.onValid Function for update the value
 * @prop {object} props.transaction The transaction
 * @prop {string} props.type The name of attribute in transaction to change
 * @example
 * return (
 *   <InputText
 *       onValid={(val)=>console.log(val)}
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
 *       type='notes' />
 * )
 */
export default function InputText({ onValid, transaction, type }) {
  const [open, setOpen] = useState(false)
  const [tempValue, setTempValue] = useState('')
  useEffect(() => {
    setTempValue(transaction.notes)
  }, [transaction.notes])
  return (
    <span className='InputText'>
      {!open ? (
        <>
          {transaction.notes}{' '}
          <FontAwesomeIcon icon={faPen} onClick={() => setOpen(!open)} />
        </>
      ) : (
        <>
          <input
            type='text'
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faCheck}
            onClick={() => {
              onValid({
                ...transaction,
                [type]: tempValue,
              })
              setOpen(!open)
            }}
          />
        </>
      )}
    </span>
  )
}

InputText.propTypes = {
  /**
   * Function for update the value
   */
  onValid: PropTypes.func.isRequired,
  /**
   * The transaction
   */
  // eslint-disable-next-line react/forbid-prop-types
  transaction: PropTypes.object.isRequired,
  /**
   * The name of attribute in transaction to change
   */
  type: PropTypes.string.isRequired,
}
