import React from "react"
import { Button } from "react-bootstrap"
import Progress from "./Progress"

const Book = ({ book, handleRemoveBook }) => {
  return (
    <div className="Lesson-Panel">
      <div className="book_details">
        <span className="School-of"> {book.category} </span>
        <h1 className="title"> {book.title} </h1>
        <h3 className="Suzanne-Collins">{book.author}</h3>
        <div class="btn-row">
          <span className="Comments">Comments</span>|
          <span className="Remove" onClick={() => handleRemoveBook(book)}>
            Remove
          </span>
          | <span className="Edit">Edit</span>
        </div>
      </div>
      <div className="right-part">
        <Progress />

        <hr className="Line-2" />

        <div className="book_remove">
          <h5 className="Current-Chapter">Current Chapter</h5>
          <h4 className="Current-Lesson">Chapter 17</h4>

          <Button className="Rectangle-2">Update Progress</Button>
        </div>
      </div>
    </div>
  )
}

export default Book
