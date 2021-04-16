import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faCheck } from '@fortawesome/free-solid-svg-icons'

const options = [
  {
    id: 1,
    name: 'Food',
  },
  {
    id: 2,
    name: 'Shooping',
  },
]

/**
 * Create a Header for the Transaction view
 * @module SelectCat
 * @component
 * @param {object} props
 * @prop {function} props.onValid Function for update the value
 * @prop {object} props.transaction The transaction
 * @prop {string} props.type The name of attribute in transaction to change
 * @example
 * return (
 *   <SelectCat
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
export default function SelectCat({ onValid, transaction, type }) {
  const [open, setOpen] = useState(false)
  const [tempValue, setTempValue] = useState('')
  useEffect(() => {
    setTempValue(JSON.stringify(transaction.category))
  }, [transaction.category])

  return (
    <span className='selectCat'>
      {!open ? (
        <>
          {transaction.category.name}{' '}
          <FontAwesomeIcon icon={faPen} onClick={() => setOpen(!open)} />
        </>
      ) : (
        <>
          <select
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}>
            {options.map((option) => (
              <option key={option.id} value={JSON.stringify(option)}>
                {option.name}
              </option>
            ))}
          </select>
          <FontAwesomeIcon
            icon={faCheck}
            onClick={() => {
              onValid({
                ...transaction,
                [type]: JSON.parse(tempValue),
              })
              setOpen(!open)
            }}
          />
        </>
      )}
    </span>
  )
}

SelectCat.propTypes = {
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
