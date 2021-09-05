import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { CalculatorContext } from '../utils/providers/calculatorProvider'

const ClearButton = ({ operator }) => {
  const { handleClearValue } = useContext(CalculatorContext)
  return (
    <>
      <div onClick={handleClearValue}>{operator}</div>
    </>
  )
}
ClearButton.propTypes = { operator: PropTypes.string }

export default ClearButton
