import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from "./../store/Book";

const BookList = (props) => {
    const { books } = props 
    useEffect(() => {
        props.requestBookList()
    }, []);

    return (
      <div>
            <h1>Book List</h1>
            <Link className='btn btn-primary' to={`/books/add`}>Add Book</Link>
            {renderBookTable(props)}
      </div>
    )
}

const renderBookTable = (props) => {
    const { books } = props;

    const deleteBook = (id) => {
        props.deleteBook(id)
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>BookName</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book, index) =>
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{book.bookName}</td>
                        <td>{book.price}</td>
                        <td>{book.category}</td>
                        <td>{book.author}</td>
                        <td><button className="btn btn-danger" onClick={() => deleteBook(book.id)}>Delete</button></td>
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
