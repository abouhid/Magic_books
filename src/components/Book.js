import React from "react"
import { Button } from "react-bootstrap"

const Book = ({ book, handleRemoveBook }) => {
  return (
    <div className="Lesson-Panel">
      <div className="book_details">
        <span className="School-of"> {book.category} </span>
        <h1 className="title"> {book.title} </h1>
        <h3 className="Suzanne-Collins">{book.author}</h3>
        <span className="Comments">Comments</span>
        <span className="Remove" onClick={() => handleRemoveBook(book)}>
          Remove
        </span>
        <span className="Edit">Edit</span>
      </div>

      <div className="book_completed">
        <div className="Rectangle-3">
          <div className="Oval-2"></div>
        </div>
        <h4 className="-Percent-Complete">64%</h4>
        <h4 className="Completed">Completed</h4>
      </div>
      <hr className="Line-2" />
      <div className="book_remove">
        <h5 className="Current-Chapter">Current Chapter</h5>
        <h4 className="Current-Lesson">chapter 17</h4>

        <Button className="Rectangle-2 btn-primary btn-sm">Update Book</Button>
      </div>
    </div>
  )
}

export default Book
