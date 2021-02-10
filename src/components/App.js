import React from "react"
import BookForm from "../containers/BookForm"
import BooksList from "../containers/BooksList"
import Header from "./Header"
import "../styles/App.css"

const App = () => {
  return (
    <div className="App">
      <Header />
      <BooksList />
      <BookForm />
    </div>
  )
}

export default App
