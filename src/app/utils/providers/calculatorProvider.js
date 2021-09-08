import React, { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'
import { MAX_DIGITS, NUMPAD_NUMBER, NUMPAD_CALC_FUNCTION } from '../constants'

export const CalculatorContext = React.createContext()

const CalculatorProvider = ({ children }) => {
  const [number, setNumber] = useState('0')
  const [storedNumber, setStoredNumber] = useState('')
  const [functionType, setFunctionType] = useState('')
  const [infoMessage, setInfoMessage] = useState('')

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  const handleKeyUp = (event) => {
    const { code, key } = event
    if (NUMPAD_NUMBER.findIndex((el) => el.code === code) >= 0) {
      handleSetDisplayValue(key)
    } else if (NUMPAD_CALC_FUNCTION.findIndex((el) => el.code === code) >= 0) {
      handleCalcFunction(key)
    } else {
      console.log(key)
      execExpression()
    }
  }

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
      setNumber((prev) => (prev + num).replace(/^0+/, ''))
    } else if (number.includes('.') || num === '.') {
      setNumber('')
      handleSetInfoMessage('Результат не определен')
    }
  }

  const handleCalcFunction = (data) => {
    handleSetInfoMessage('')
    console.log('data', data, 'number', number)
    console.log('storedNumber', storedNumber)

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
