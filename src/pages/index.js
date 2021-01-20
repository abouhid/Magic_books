import React, { useState } from "react"
import { Link } from "gatsby"
import App from "../components/App.js"
import { Provider } from "react-redux"
import store from "../reducers/books"
export const bookObj = [
  {
    id: Math.floor(Math.random() * 100),
    title: "winds of winter",
    category: "fantasy",
  },
  {
    id: Math.floor(Math.random() * 100),
    title: "game of thrones",
    category: "horror",
  },
]
const IndexPage = () => {
  const [books, setBooks] = useState(bookObj)
  store.dispatch({
    type: "CREATE_BOOK",
    payload: books,
  })
  return (
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  )
}

export default IndexPage
