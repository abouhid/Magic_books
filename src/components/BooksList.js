import React from "react"
import Book from "./Book"
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const BooksList = () => {
  const bookObj = [
    {
      id: 1,
      title: "winds of winter",
      category: "fantasy",
    },
    {
      id: 2,
      title: "game of thrones",
      category: "horror",
    },
  ]

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
