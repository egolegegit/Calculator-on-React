import React, { useContext } from 'react'
import { CalculatorContext } from '../utils/providers/calculatorProvider'
import PropTypes from 'prop-types'

const NumberButton = ({ buttonValue }) => {
  const { handleSetDisplayValue } = useContext(CalculatorContext)
  return (
    <>
      <div onClick={() => handleSetDisplayValue(buttonValue)}>
        {buttonValue}
      </div>
    </>
  )
}
NumberButton.propTypes = { buttonValue: PropTypes.string.isRequired }

export default NumberButton
