import React from 'react'
import Display from './components/display'
import NumberButton from './components/numberButton'
import EqualButton from './components/equalButton'
import FunctionButton from './components/functionButton'
import ClearButton from './components/clearButton'

function App() {
  return (
    <>
      <h3>Калькулятор на React</h3>
      <Display />
      <div className="calculator">
        <div className="buttons">
          <div className="operators">
            <FunctionButton operator={'+'} />
            <FunctionButton operator={'-'} />
            <FunctionButton operator={'*'} />
            <FunctionButton operator={'/'} />
          </div>
          <div className="leftPanel">
            <div className="numbers">
              <NumberButton buttonValue={'7'} />
              <NumberButton buttonValue={'8'} />
              <NumberButton buttonValue={'9'} />
            </div>
            <div className="numbers">
              <NumberButton buttonValue={'4'} />
              <NumberButton buttonValue={'5'} />
              <NumberButton buttonValue={'6'} />
            </div>
            <div className="numbers">
              <NumberButton buttonValue={'1'} />
              <NumberButton buttonValue={'2'} />
              <NumberButton buttonValue={'3'} />
            </div>
            <div className="numbers">
              <NumberButton buttonValue={'0'} />
              <NumberButton buttonValue={'.'} />
              <ClearButton operator={'AC'} />
            </div>
          </div>
          <EqualButton />
        </div>
      </div>
    </>
  )
}

export default App
