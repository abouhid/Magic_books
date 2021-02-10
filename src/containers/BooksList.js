import React from "react"
import { connect } from "react-redux"
import Book from "../components/Book"
import "bootstrap/dist/css/bootstrap.min.css"
import store from "../reducers"
import { createBook, removeBook, changeFilter } from "../actions"
import { useDispatch } from "react-redux"
import CategoryFilter from "../components/CategoryFilter"

const BooksList = ({ removeBook, changeFilter }) => {
  const dispatch = useDispatch()

  let filteredBooks = store.getState().filterReducer

  const handleRemoveBook = book => {
    dispatch(removeBook(book))
  }
  const handleFilterChange = e => {
    const { value } = e.target
    filteredBooks = dispatch(changeFilter(value)).payload
  }

  const allBooks = store.getState().bookReducer
  const displayBooks = allBooks
    .filter(book =>
      filteredBooks === "All" ? true : book.category === filteredBooks
    )
    .map(book => {
      return (
        <Book handleRemoveBook={handleRemoveBook} key={book.id} book={book} />
      )
    })

  return (
    <div>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <>{displayBooks}</>
    </div>
  )
}
export default connect(state => ({ state }), {
  createBook,
  removeBook,
  changeFilter,
})(BooksList)
