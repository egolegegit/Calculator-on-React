import React, { useState } from 'react'
import { PropTypes } from 'prop-types'

export const CalculatorContext = React.createContext()

const CalculatorProvider = (props) => {
  const [number, setNumber] = useState('0')
  const [storedNumber, setStoredNumber] = useState('')
  const [functionType, setFunctionType] = useState('')

  const handleSetStoredValue = () => {
    setStoredNumber(number)
    setNumber('')
  }

  const handleSetDisplayValue = (num) => {
    if ((!number.includes('.') || num !== '.') && number.length < 8) {
      setNumber(`${(number + num).replace(/^0+/, '')}`)
    }
  }

  const handleCalcFunction = (data) => {
    if (number) {
      setFunctionType(data)
      handleSetStoredValue()
    }
    if (storedNumber) {
      setFunctionType(data)
    }
  }

  const handleClearValue = () => {
    setNumber('')
    setStoredNumber('')
    setFunctionType('')
  }

  const execExpression = () => {
    if (number && storedNumber) {
      switch (functionType) {
        case '+':
          setStoredNumber(
            `${
              Math.round(
                `${(parseFloat(storedNumber) + parseFloat(number)) * 100}`
              ) / 100
            }`
          )
          break
        case '-':
          setStoredNumber(
            `${
              Math.round(
                `${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`
              ) / 1000
            }`
          )
          break
        case '/':
          setStoredNumber(
            `${
              Math.round(
                `${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`
              ) / 1000
            }`
          )
          break
        case '*':
          setStoredNumber(
            `${
              Math.round(
                `${parseFloat(storedNumber) * parseFloat(number) * 1000}`
              ) / 1000
            }`
          )
          break
        default:
          break
      }
      setNumber('')
    }
  }

  return (
    <CalculatorContext.Provider
      value={{
        number,
        storedNumber,
        setNumber,
        handleSetDisplayValue,
        handleCalcFunction,
        handleSetStoredValue,
        execExpression,
        handleClearValue,
        functionType,
      }}
    >
      {props.children}
    </CalculatorContext.Provider>
  )
}

CalculatorProvider.propTypes = {
  props: PropTypes.object,
  children: PropTypes.array,
}

export default CalculatorProvider
