import { func } from "prop-types"
import { createBook, removeBook } from "../reducers"
import { createStore } from "react-redux"
function bookReducer(book = null, action) {
  switch (action.type) {
    case "CREATE_BOOK":
      return { ...book, ...action.payload }
    case "REMOVE_BOOK":
      return "book removed"
    default:
      return book
  }
}

const store = redux.createStore(bookReducer)

store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: "CREATE_BOOK" })
// {value: 1}
