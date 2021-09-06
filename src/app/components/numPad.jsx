import React from 'react'
import NumberButton from './numberButton'
import EqualButton from './equalButton'
import FunctionButton from './functionButton'
import ClearButton from './clearButton'

const NumPad = () => {
  return (
    <>
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
    </>
  )
}

export default NumPad
