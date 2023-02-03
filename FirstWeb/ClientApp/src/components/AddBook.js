import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from "./../store/Book";

const AddBook = (props) => {
    const addBook = (e) => {
        e.preventDefault();
        const data = {
            BookName: e.target.name.value,
            Price: Number(e.target.price.value),
            Category: e.target.category.value,
            Author: e.target.author.value
        }

        props.addBook(data, props.history)
    }

    return (
      <div>
            <h1>Add Book</h1>
            <form onSubmit={addBook}>
                <div style={{ width: '300px', display: 'flex', justifyContent: 'space-between' }}>BookName: <input type="text" name="name" required /></div>
                <div style={{ width: '300px', display: 'flex', justifyContent: 'space-between' }}>Price: <input type="number" name="price" required /></div>
                <div style={{ width: '300px', display: 'flex', justifyContent: 'space-between' }}>Category: <input type="text" name="category" /></div>
                <div style={{ width: '300px', display: 'flex', justifyContent: 'space-between' }}>Author: <input type="text" name="author" /></div>
                <button type="submit" className="btn btn-success">Add</button>
            </form>
      </div>
    )
}

export default connect(
    state => state.book,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(AddBook);
