import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import { MAX_DIGITS } from '../constants'

export const CalculatorContext = React.createContext()

const CalculatorProvider = ({ children }) => {
  const [number, setNumber] = useState('0')
  const [storedNumber, setStoredNumber] = useState('')
  const [functionType, setFunctionType] = useState('')
  const [infoMessage, setInfoMessage] = useState('')

  const handleSetStoredValue = () => {
    setStoredNumber(number)
    setNumber('')
  }

  const handleSetInfoMessage = (msg) => {
    if (!msg) {
      setInfoMessage('')
    } else {
      setInfoMessage(msg)
    }
  }

  const handleSetDisplayValue = (num) => {
    if ((!number.includes('.') || num !== '.') && number.length < MAX_DIGITS) {
      setNumber(`${(number + num).replace(/^0+/, '')}`)
    } else if (number.includes('.') || num === '.') {
      setNumber('')
      handleSetInfoMessage('Результат не определен')
    }
  }

  const handleCalcFunction = (data) => {
    handleSetInfoMessage('')

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
    setInfoMessage('')
  }

  const execExpression = () => {
    if (isNaN(number) || isNaN(storedNumber)) {
      setNumber('')
      setStoredNumber('')
      setInfoMessage('Результат не определен')
    } else if (number && storedNumber) {
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
        infoMessage,
        handleSetDisplayValue,
        handleCalcFunction,
        handleSetStoredValue,
        execExpression,
        handleClearValue,
        functionType,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  )
}

CalculatorProvider.propTypes = {
  children: PropTypes.object,
}

export default CalculatorProvider
