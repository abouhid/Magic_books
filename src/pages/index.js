import React, { useState } from "react"
import App from "../components/App.js"
import { Provider } from "react-redux"
import store from "../reducers/books"
import { createBook, removeBook } from "../actions"
export const bookObj = [
  {
    id: Math.floor(Math.random() * 500),
    title: "winds of winter",
    category: "Sci-Fi",
  },
  {
    id: Math.floor(Math.random() * 500),
    title: "game of thrones",
    category: "Horror",
  },
]
const IndexPage = () => {
  const [books, setBooks] = useState(bookObj)

  store.dispatch(createBook(books[0]))
  store.dispatch(createBook(books[1]))

  return (
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  )
}

export default IndexPage
