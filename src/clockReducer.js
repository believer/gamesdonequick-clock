export const initialState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  hundreths: 0,
  runner: '',
  running: false,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_RUNNER':
      return {
        ...state,
        runner: action.payload,
      }
    case 'START':
      return { ...state, running: true }
    case 'INCREMENT':
      let { hours, minutes, seconds, hundreths } = state

      hundreths = state.hundreths + 1

      if (hundreths > 9) {
        hundreths = 0
        seconds = seconds + 1
      }

      if (seconds > 59) {
        seconds = 0
        minutes = minutes + 1
      }

      if (minutes > 59) {
        minutes = 0
        hours = hours + 1
      }

      return {
        hundreths,
        seconds,
        minutes,
        hours,
        running: true,
      }
    case 'STOP':
      return {
        ...state,
        running: false,
      }
    case 'RESET':
      return {
        ...initialState,
        runner: state.runner,
      }
    default:
      return state
  }
}
