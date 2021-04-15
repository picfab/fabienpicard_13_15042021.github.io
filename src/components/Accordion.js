import React, { useState } from 'react'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

/**
 * Accordion with title and content
 */
export default function Accordion(props) {
  const [open, setOpen] = useState(false)

  /**
   * Set the state for open the accordion
   * and calculate the height of component in DOM
   */
  const openAccordion = (e) => {
    const accordionTitle = e.target.closest('.accordion__titleBox')
    const panel = accordionTitle.nextElementSibling
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`
    }
    setOpen(!open)
  }

  const { content, title } = props
  return (
    <div className='accordion'>
      <div className='accordion__container'>
        <div
          className='accordion__titleBox'
          role='button'
          tabIndex={0}
          onKeyDown={openAccordion}
          onClick={openAccordion}>
          <span className='accordion__icon'>
            {!open ? (
              <FontAwesomeIcon icon={faChevronDown} />
            ) : (
              <FontAwesomeIcon icon={faChevronUp} />
            )}
          </span>
          {title}
        </div>
        <div className='accordion__contentBox'>
          <div className='accordion__content'>{content}</div>
        </div>
      </div>
    </div>
  )
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
}
