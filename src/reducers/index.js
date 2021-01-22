import { combineReducers } from "redux"
import { createStore } from "redux"
import bookReducer from "./books"
import filterReducer from "./filter"

// const bookReducer = (book = [], action) => {
//   switch (action.type) {
//     case "CREATE_BOOK":
//       return [...book, action.payload]
//     case "REMOVE_BOOK":
//       return book.filter((el, i) => action.payload.id != el.id)

//     default:
//       return book
//   }
// }
// const filterReducer = (book = [], action) => {
//   switch (action.type) {
//     case "CHANGE_FILTER":
//       return action.payload

//     default:
//       return "All"
//   }
// }
const reducers = combineReducers({
  bookReducer,
  filterReducer,
})

// export default reducers
const store = createStore(reducers)
export default store
// import { createStore } from "redux"
// import bookReducer from "./books"
// import filterReducer from "./filter"
// import { combineReducers } from "redux"
// const reducers = combineReducers({
//   bookReducer,
//   filterReducer,
// })
// const store = createStore(reducers)
// export default store
