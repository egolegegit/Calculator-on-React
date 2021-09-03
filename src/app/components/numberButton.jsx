import React from 'react'
import PropTypes from 'prop-types'

const NumberButton = ({ buttonValue }) => {
  return (
    <>
      <div>{buttonValue}</div>
    </>
  )
}
NumberButton.propTypes = { buttonValue: PropTypes.string.isRequired }

export default NumberButton
