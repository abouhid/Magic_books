import React from "react"
import { Button } from "react-bootstrap"

const Book = ({ book, handleRemoveBook }) => {
  return (
    <ul>
      Book ID: {book.id} - Book title: {book.title} - Book Category:{" "}
      {book.category}
      <Button onClick={() => handleRemoveBook(book)}>Remove Book</Button>
    </ul>
  )
}

export default Book
