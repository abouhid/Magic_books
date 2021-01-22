import { combineReducers } from "redux"
import { createStore } from "redux"
import bookReducer from "./books"
import filterReducer from "./filter"

const reducers = combineReducers({
  bookReducer,
  filterReducer,
})

const store = createStore(reducers)
export default store
