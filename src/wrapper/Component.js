/* eslint-disable react/prop-types */
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(() => ({}), {})

/**
 * Wrapper for preview in documentation
 * @ignore
 */
const Component = (props) => {
  const { children } = props
  return (
    <>
      <head>
        <link type='text/css' rel='stylesheet' href='styles.css' />
      </head>
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    </>
  )
}

export default Component
