import React from "react"
const Book = ({ book }) => {
  return (
    <ul>
      {console.log(book)}
      <li>
        Book ID:{book.id} - Book title:{book.title} - Book category:
        {book.category}
      </li>
    </ul>
  )
}

export default Book
