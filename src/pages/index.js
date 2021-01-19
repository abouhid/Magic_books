import React, { useState } from "react"
import { Link } from "gatsby"
import App from "../components/App.js"
import { Provider } from "react-redux"
import store from "../reducers/books"
import { bookObj } from "../components/BooksList"

const IndexPage = () => {
  const [books, setBooks] = useState(bookObj)
  return (
    <div>
      <Provider store={store}>
        {console.log(books)}
        <App />
      </Provider>
    </div>
  )
}

export default IndexPage
