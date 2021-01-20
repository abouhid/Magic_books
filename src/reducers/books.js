import { func } from "prop-types"
import { createBook, removeBook } from "../actions"
import { createStore } from "redux"
import bookReducer from "../reducers"

const store = createStore(bookReducer)

store.dispatch(createBook())
store.dispatch({
  type: "CREATE_BOOK",
  payload: {
    id: 1,
    title: "This is a book",
    category: "Action",
  },
})

export default store
