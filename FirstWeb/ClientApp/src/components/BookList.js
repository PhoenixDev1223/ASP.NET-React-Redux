import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from "./../store/Book";

const BookList = (props) => {
    const { books } = props 
    useEffect(() => {
        props.requestBookList()
    }, []);

    return (
      <div>
        <h1>Book List</h1>
        {renderBookTable(books)}
      </div>
    )
}

const renderBookTable = (books) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>BookName</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Author</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book, index) =>
                    <tr key={book.Id}>
                        <td>{index + 1}</td>
                        <td>{book.bookName}</td>
                        <td>{book.price}</td>
                        <td>{book.category}</td>
                        <td>{book.author}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default connect(
    state => state.book,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(BookList);
