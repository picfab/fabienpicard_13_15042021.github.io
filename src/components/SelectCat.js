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
export default function SelectCat({ value, onValid, transaction, type }) {
  const [open, setOpen] = useState(false)
  const [tempValue, setTempValue] = useState('')
  useEffect(() => {
    setTempValue(JSON.stringify(value))
  }, [value])

  return !open ? (
    <>
      {value.name}{' '}
      <FontAwesomeIcon icon={faPen} onClick={() => setOpen(!open)} />
    </>
  ) : (
    <>
      <select value={tempValue} onChange={(e) => setTempValue(e.target.value)}>
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
  )
}

SelectCat.propTypes = {
  value: PropTypes.string.isRequired,
  onValid: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  transaction: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
}
