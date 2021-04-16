import React, { useState } from 'react'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

/**
 * Create a accordion
 * @module Accordion
 * @component
 * @param {object} props
 * @prop {element|string} props.content The content of accordion in JSX or string
 * @prop {element|string} props.title The content of accordion in JSX or string
 * @example
 * return (
 *   <Accordion title='Titre' content='The content of accordion'/>
 * )
 */
export default function Accordion({ content, title }) {
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
  /**
   * The content of accordion in JSX or string
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /**
   * The content of accordion in JSX or string
   */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
}
