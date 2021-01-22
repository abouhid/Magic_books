// import { createStore } from "redux"
// import reducers from "../reducers"

// const store = createStore(reducers)
// export default store

const bookReducer = (book = [], action) => {
  switch (action.type) {
    case "CREATE_BOOK":
      return [...book, action.payload]
    case "REMOVE_BOOK":
      return book.filter((el, i) => action.payload.id != el.id)

    default:
      return book
  }
}
export default bookReducer
