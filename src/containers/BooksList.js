import React from "react"
import { connect } from "react-redux"
import Book from "../components/Book"
import "bootstrap/dist/css/bootstrap.min.css"
import store from "../reducers/books"
import { createBook, removeBook } from "../actions"
import { useDispatch } from "react-redux"

const BooksList = () => {
  const dispatch = useDispatch()
  const handleRemoveBook = book => {
    dispatch(removeBook(book))
  }

  const allBooks = store.getState().reducer

  const displayBooks = allBooks.map(book => {
    return (
      <Book handleRemoveBook={handleRemoveBook} key={book.id} book={book} />
    )
  })

  return <div>{displayBooks}</div>
}

export default connect(state => ({ state }), { createBook, removeBook })(
  BooksList
)
