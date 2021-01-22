// import { createStore } from "redux"
// import reducers from "../reducers"

// const store = createStore(reducers)

// export default store

const filterReducer = (book = [], action) => {
  switch (action.type) {
    case "CHANGE_FILTER":
      return action.payload

    default:
      return "All"
  }
}
export default filterReducer
