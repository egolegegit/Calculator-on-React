import React, { useContext } from 'react'
import { CalculatorContext } from '../utils/providers/calculatorProvider'
import PropTypes from 'prop-types'

const FunctionButton = ({ operator }) => {
  const { handleCalcFunction } = useContext(CalculatorContext)
  return (
    <>
      <div onClick={() => handleCalcFunction(operator)}>{operator}</div>
    </>
  )
}
FunctionButton.propTypes = { operator: PropTypes.string.isRequired }

export default FunctionButton
