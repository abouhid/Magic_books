import { createStore } from "redux"
import bookReducer from "../reducers"

const store = createStore(bookReducer)

store.subscribe(() => console.log(store.getState()))

export default store
