import React from "react"
import { Button } from "react-bootstrap"
import { removeBook } from "../actions"
import { useDispatch } from "react-redux"

const Book = ({ book }) => {
  const dispatch = useDispatch()

  return (
    <ul>
      <li>
        Book ID: {book.id} - Book title: {book.title} - Book Category:{" "}
        {book.category}
        <Button onClick={() => dispatch(removeBook(book))}>Delete Book</Button>
      </li>
    </ul>
  )
}

export default Book
