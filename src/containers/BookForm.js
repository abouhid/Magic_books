import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import { Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { createBook } from "../actions"
import { useDispatch } from "react-redux"

const BookForm = () => {
  const { register, handleSubmit, watch, errors } = useForm()

  const [newTitle, setnewTitle] = useState("")
  const [newCategory, setnewCategory] = useState("")
  const dispatch = useDispatch()

  const handleChange = e => {
    const { value } = e.target
    setnewTitle(value)
    setnewCategory(document.getElementById("category").value)
  }
  const handleCategory = () => {
    setnewCategory(document.getElementById("category").value)
  }
  const onSubmit = () => {
    const newBook = {
      id: Math.floor(Math.random() * 500),
      title: newTitle,
      category: newCategory,
    }
    dispatch(createBook(newBook))
    document.getElementById("bookinput").value = ""
    document.getElementById("category").value = "Action"
  }


  const categories = [
    "Action",
    "Biography",
    "History",
    "Horror",
    "Kids",
    "Learning",
    "Sci-Fi",
  ]
  const categoriesOpt = categories.map((cat, index) => (
    <option key={index}>{cat}</option>
  ))
  return (
    <>
    <div className='container-fluid'>
    <h1 className= "Title_two">ADD NEW BOOK</h1>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="bookinput">
        <input
          type="text"
          name="bookTitle"
          placeholder="Book Title"
          onChange={handleChange}
          className="input_field"
          ref={register({ required: true })}
        />
        {errors.bookTitle && <span>This field is required</span>}
      </Form.Group>
      <Form.Group controlId="category">
        <select
          name="category"
          onChange={handleCategory}
          ref={register}
          className="category_field"
         
        >

          {categoriesOpt}
        </select>
      </Form.Group>
      <Button variant="primary" type="submit" className='submit_form'>
       Add Book
      </Button>
    </Form>
    </div>
    </>
  )
}

export default BookForm
