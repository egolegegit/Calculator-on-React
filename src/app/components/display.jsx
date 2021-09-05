import React, { useContext } from 'react'
import { CalculatorContext } from '../utils/providers/calculatorProvider'

const Display = () => {
  const { number, storedNumber, functionType } = useContext(CalculatorContext)

  return (
    <>
      <div className="input">
        <span className="calc-string">
          {!storedNumber
            ? ''
            : `${storedNumber}${functionType}${number}`}
        </span>
        <span>
          {!number.length && !storedNumber ? '0' : number || storedNumber}
        </span>
      </div>
    </>
  )
}

export default Display
