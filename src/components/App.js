import React from "react"
import BookForm from "../containers/BookForm"
import BooksList from "../containers/BooksList"
import Header from "./Header"

const App = () => {
  return (
    <div>
      <Header />
      <BooksList />
      <BookForm />

    </div>
  )
}

export default App
