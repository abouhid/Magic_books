import React from "react"
import { Button } from "react-bootstrap"

const Book = ({ book, handleRemoveBook }) => {
  return (
    <div className = 'Lesson-Panel'>
      <span className ='School-of'> {book.category} </span>
      <title> {book.title} </title>
      <h3 className='Suzanne-Collins' > Author</h3>
      Book ID: {book.id} - Book title: {book.title} - Book Category:{" "}
      {book.category}
      <Button onClick={() => handleRemoveBook(book)}>Remove Book</Button>
    </div>
  )
}

export default Book
