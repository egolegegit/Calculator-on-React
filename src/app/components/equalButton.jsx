import React, { useContext } from 'react'
import { CalculatorContext } from '../utils/providers/calculatorProvider'

const EqualButton = () => {
  const { execExpression } = useContext(CalculatorContext)
  return (
    <>
      <div className="equal" onClick={execExpression}>
        =
      </div>
    </>
  )
}

export default EqualButton
