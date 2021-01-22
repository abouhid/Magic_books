import React from "react"
import { connect } from "react-redux"
import Book from "../components/Book"
import "bootstrap/dist/css/bootstrap.min.css"
import store from "../reducers"
import { createBook, removeBook, changeFilter } from "../actions"
import { useDispatch } from "react-redux"
import CategoryFilter from "../components/CategoryFilter"

const BooksList = () => {
  const dispatch = useDispatch()
  const handleRemoveBook = book => {
    dispatch(removeBook(book))
  }
  const handleFilterChange = e => {
    const { value } = e.target
    dispatch(changeFilter(value))
  }

  const allBooks = store.getState().bookReducer
  const displayBooks = allBooks.map(book => {
    return (
      <Book handleRemoveBook={handleRemoveBook} key={book.id} book={book} />
    )
  })

  return (
    <>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <div>{displayBooks}</div>
    </>
  )
}

export default connect(state => ({ state }), { createBook, removeBook })(
  BooksList
)
