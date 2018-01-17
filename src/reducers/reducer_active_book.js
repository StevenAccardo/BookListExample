//The state argument is not the application state, it is only the state this reducer is responsible for.
//By setting the default value equal to null, you avoid any comipling issues when the app first starts and state hasn't been defined yet. So insteading of getting a undefined in that case, state will be equal to null instead.
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
