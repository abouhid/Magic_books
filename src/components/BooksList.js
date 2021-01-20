import React from "react"
import Book from "./Book"
import "bootstrap/dist/css/bootstrap.min.css"
import { bookObj } from "../pages"

const BooksList = () => {
  const displayBooks = bookObj.map(book => {
    return <Book key={book.id} book={book} />
  })

  return <div>{displayBooks}</div>
}

export default BooksList
