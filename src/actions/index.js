// This file contains all of the different action creators that we make.

// This is the action creator called selectBook.
export function selectBook(book) {
  //selectBook is an ActionCreator, it needs to return an action, an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
};
