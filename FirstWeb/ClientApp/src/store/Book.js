const setBookList = 'SET_BOOK_LIST';
const deleteBookById = 'DELETE_BOOK_ByID';
const initialState = { book: null, books: [], isLoading: false };

export const actionCreators = {
    requestBookList: () => async (dispatch) => {
        try {
            const url = `api/books`;
            const response = await fetch(url);
            const books = await response.json();
            dispatch({ type: setBookList, payload: { books: books } });
        } catch (err) {
            console.log(err)
        }
    },
    addBook: (data, history) => async (dispatch) => {
        try {
            const url = 'api/books';
            const requestOptions = {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data)
            };
            const response = await fetch(url, requestOptions);
            const book = await response.json();
            if (book.id) {
                history.push('/books')
            }
        } catch (err) {
            console.log(err)
        }
    },
    deleteBook: (id) => async (dispatch) => {
        try {
            const url = `api/books/${id}`;
            const requestOptions = {
                method: 'DELETE'
            }
            await fetch(url, requestOptions);
            dispatch({ type: deleteBookById, payload: { id: id } })
        } catch (err) {
            console.log(err)
        }
    }
};

export const reducer = (state, action) => {
    state = state || initialState;
    const { payload } = action

    switch (action.type) {
        case setBookList: {
            return {
                ...state,
                books: payload.books
            };
        }
        case deleteBookById: {
            const updateBooks = state.books.filter((book) => book.id !== payload.id)
            return {
                ...state,
                books: updateBooks
            }
        }
        default: return state
    }
};
