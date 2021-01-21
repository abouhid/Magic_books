import { createStore } from "redux"
import bookReducer from "../reducers"

const store = createStore(bookReducer)
export default store
