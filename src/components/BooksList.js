import React from "react"
import Book from "./Book"
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { bookObj } from "../pages"

const BooksList = () => {
  const displayBooks = bookObj.map(book => {
    return <Book key={book.id} book={book} />
  })

  return (
    <div>
      {displayBooks} <Button>Click me</Button>
    </div>
  )
}

export default BooksList
