import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    //This if statement makes sure there is no error when the application is starting up. So if this.props.book is still null, then the div will be returned, and the rest of the code won't be executed until this.props.book is true.
    if (!this.props.book) {
      return <div>Select a book to get started.</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  };
};

// Takes the newly updated Application state (Redux state), and maps that to props by taking the state as a value, and assinging it a key. That value of state can then be accessed by the this.props.newlyCreatedKey as seen above in the Title and Pages JSX elements.
function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
