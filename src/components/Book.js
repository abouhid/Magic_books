import React from "react"
import { Button } from "react-bootstrap"

const Book = ({ book, handleRemoveBook }) => {
  return (
    <div className="Lesson-Panel">
      <span className="School-of"> {book.category} </span>
      <h1 className="title"> {book.title} </h1>
      <h3 className="Suzanne-Collins">Author</h3>
      <span className="Comments">comments</span>
      <span className="Remove">remove</span>
      <span className="Edit">edit</span>
      <div className='Rectangle-3'>
        <div className="Oval-2"></div>
      </div>
      <span className='-Percent-Complete'>64%</span>
      <h4 className='Completed'>completed</h4>

      <hr className='Line-2' />
      <h5 className = 'Current-Chapter'>current chapter</h5>
      <h4 className='Current-Lesson'>chapter 17</h4>

      <Button className='Rectangle-2' onClick={() => handleRemoveBook(book)}>Remove Book</Button>
    </div>
  )
}

export default Book
