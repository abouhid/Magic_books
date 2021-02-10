import React, { useState } from "react"
import App from "../components/App.js"
import { Provider } from "react-redux"
import store from "../reducers"
import { createBook } from "../actions"
export const bookObj = [
  {
    id: Math.floor(Math.random() * 500),
    title: "The Winds of winter",
    category: "Sci-Fi",
    author: "George R. R. Martin",
  },
  {
    id: Math.floor(Math.random() * 500),
    title: "Dr. Sleep",
    category: "Horror",
    author: "Stephen King",
  },
]
const IndexPage = () => {
  const [books, setBooks] = useState(bookObj)

  store.dispatch(createBook(books[0]))
  store.dispatch(createBook(books[1]))

  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  )
}

export default IndexPage
