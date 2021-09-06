import React from 'react'
import CalculatorProvider from './utils/providers/calculatorProvider'
import Display from './components/display'
import NumPad from './components/numPad'

function App() {
  return (
    <CalculatorProvider>
      <div className="calculator">
        <Display />
        <NumPad />
      </div>
    </CalculatorProvider>
  )
}

export default App
