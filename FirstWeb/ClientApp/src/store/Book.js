const setBookList = 'SET_BOOK_LIST';
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
    }
};

export const reducer = (state, action) => {
    state = state || initialState;
    const { payload } = action

    if (action.type === setBookList) {
        return {
            ...state,
            books: payload.books
        };
    }

    return state;
};
