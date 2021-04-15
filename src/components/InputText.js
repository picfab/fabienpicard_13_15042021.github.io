import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faCheck } from '@fortawesome/free-solid-svg-icons'

export default function InputText({ value, onValid, transaction, type }) {
  const [open, setOpen] = useState(false)
  const [tempValue, setTempValue] = useState('')
  useEffect(() => {
    setTempValue(value)
  }, [value])
  return !open ? (
    <>
      {value} <FontAwesomeIcon icon={faPen} onClick={() => setOpen(!open)} />
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
  )
}

InputText.propTypes = {
  value: PropTypes.string.isRequired,
  onValid: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  transaction: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
}
