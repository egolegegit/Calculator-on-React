import React from 'react'
import PropTypes from 'prop-types'

const ClearButton = ({ operator }) => {
  return (
    <>
      <div>{operator}</div>
    </>
  )
}
ClearButton.propTypes = { operator: PropTypes.string }

export default ClearButton
