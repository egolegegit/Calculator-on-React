import React from 'react'
import PropTypes from 'prop-types'

const FunctionButton = ({ operator }) => {
  return (
    <>
      <div>{operator}</div>
    </>
  )
}
FunctionButton.propTypes = { operator: PropTypes.string }

export default FunctionButton
