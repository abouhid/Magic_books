import { combineReducers } from "redux"

const reducer = (book = [], action) => {
  switch (action.type) {
    case "CREATE_BOOK":
      return [...book, action.payload]
    case "REMOVE_BOOK":
      return book.filter((el, i) => action.payload.id != el.id)

    default:
      return book
  }
}
const filterReducer = (book = [], action) => {
  console.log(action.payload)
  switch (action.type) {
    case "CHANGE_FILTER":
      return action.payload

    default:
      return "All"
  }
}
const bookReducer = combineReducers({
  reducer,
  filterReducer,
})
export default bookReducer
