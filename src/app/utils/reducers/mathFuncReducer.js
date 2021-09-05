export default function mathFuncReducer(state, action) {
  console.log(action.type)
  switch (action.type) {
    case '+':
      state.setStoredNumber(
        `${
          Math.round(
            `${
              (parseFloat(state.storedNumber) + parseFloat(state.number)) * 100
            }`
          ) / 100
        }`
      )
      break

    default:
      throw new Error('Unknown action')
  }
}
