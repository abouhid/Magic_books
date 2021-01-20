import React from "react"
import Form from "react-bootstrap/Form"
import { Button } from "react-bootstrap"
import { useForm } from "react-hook-form"

const BookForm = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => {
    console.log(data)
    document.getElementById("bookinput").value = ""
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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="bookinput">
        <Form.Label>Book Title</Form.Label>
        <Form.Control
          type="text"
          name="bookTitle"
          placeholder="Book Title"
          ref={register({ required: true })}
        />
        {errors.bookTitle && <span>This field is required</span>}
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Category:</Form.Label>
        <Form.Control as="select" name="category" ref={register}>
          {categoriesOpt}
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default BookForm
