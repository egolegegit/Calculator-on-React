import React from 'react'
import CalculatorProvider from './utils/providers/calculatorProvider'
import Display from './components/display'
import NumberButton from './components/numberButton'
import EqualButton from './components/equalButton'
import FunctionButton from './components/functionButton'
import ClearButton from './components/clearButton'

function App() {
  return (
    <CalculatorProvider>
      <div className="calculator">
        <Display />
        <div className="buttons">
          <FunctionButton operator={'+'} />
          <FunctionButton operator={'-'} />
          <FunctionButton operator={'*'} />
          <FunctionButton operator={'/'} />
          <NumberButton buttonValue={'7'} />
          <NumberButton buttonValue={'8'} />
          <NumberButton buttonValue={'9'} />
          <NumberButton buttonValue={'4'} />
          <NumberButton buttonValue={'5'} />
          <NumberButton buttonValue={'6'} />
          <NumberButton buttonValue={'1'} />
          <NumberButton buttonValue={'2'} />
          <NumberButton buttonValue={'3'} />
          <NumberButton buttonValue={'0'} />
          <NumberButton buttonValue={'.'} />
          <ClearButton operator={'AC'} />
          <EqualButton />
        </div>
      </div>
    </CalculatorProvider>
  )
}

export default App
