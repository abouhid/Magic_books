import React from "react"
import Book from "../components/Book"
import "bootstrap/dist/css/bootstrap.min.css"
import { bookObj } from "../pages"
import { Button } from "react-bootstrap"
import { removeBook } from "../actions"
import store from "../reducers/books"

const deleteBook = data => {
  store.dispatch(removeBook(data))

  // document.getElementById("bookinput").value = ""
  // document.getElementById("category").value = "Action"
}
const BooksList = () => {
  const displayBooks = bookObj.map(book => {
    return (
      <div key={book.id}>
        {/* <Book book={book} /> */}
        {/* <Button onClick={deleteBook(book)}>deleteBook</Button> */}
        test
      </div>
    )
  })

  return <div>{displayBooks}</div>
}

export default BooksList
