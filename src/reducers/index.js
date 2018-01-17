import { combineReducers } from 'redux';
// imports the reducer file BooksReducer
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// combineReducers is a method from the Redux library that maps the states, by including all of the reducers into a root reducer.
//By passing the object to combineReducers, we are telling Redux how to create our application state
const rootReducer = combineReducers({
  //Any key in the JS Object passed to combineReducers will end up as a key on the global state.
  //Allows access to the BooksReducer by way of the key "books"
  books: BooksReducer,
  activeBook: ActiveBook
});

//exports the root reducer which has access to all of the reducers, so that it can be accessed by a file that imports it.
export default rootReducer;
