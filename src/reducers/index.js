import { combineReducers } from "redux"

const reducer = (book = {}, action) => {
  switch (action.type) {
    case "CREATE_BOOK":
      return { ...book, ...action.payload }
    case "REMOVE_BOOK":
      return "book removed"
    default:
      return book
  }
}
const bookReducer = combineReducers({
  reducer,
})
export default bookReducer
