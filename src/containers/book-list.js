// Imports the entire React library, as well as importing the React.Component method as just component. This allows us to access the Component method without always having to type React.Component.
import React, { Component } from 'react';
// React-redux is a library that connects react with redux, it is the interface that allows the two libraries to interact
import { connect } from 'react-redux';
// imports the selectBook method from the index.js file in the actions folder
import { selectBook } from '../actions/index';
// This method ensures that the action created by the action creator flows through all of the reducers.
import { bindActionCreators } from 'redux';

// You don't export the component when there is a contianer created
class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      )
    })
  }


  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// If the state ever changes, this container will rerender with the updated state items. As the state changes, the new state will be availble through this.props.
//Takes the application state and maps it to the props for BookList, usually an object.
function mapStateToProps(state) {
  // Whatever gets returned will show up as props inside of this Booklist container, and will be accesible by calling this.props.
  return {
    books: state.books
  };
}
// Anything returned from this function will end up as props on the Booklist container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called the result should be passed to all of our reducers. This is what the bindActiionCreators is doing. It is passing the resulting action from the action creator selectBook through the dispatch method which will send it out to all of the reducers.
  return bindActionCreators({ selectBook: selectBook }, dispatch );
}

//Whenever we make a container, we don't want to export the component, we want to export the contianer, in this case mapStateToProps.

// The connect method takes a function and a component and produces a container. a container has access to the state in Redux.
//In order ot promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it availble as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
