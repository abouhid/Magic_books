import React from "react"
import { Button } from "react-bootstrap"

const Book = ({ book, handleRemoveBook }) => {
  return (
    <ul>
      <li>
        Book ID: {book.id} - Book title: {book.title} - Book Category:{" "}
        {book.category}
        <Button onClick={() => handleRemoveBook(book)}>Remove Book</Button>
      </li>
    </ul>
  )
}

export default Book
