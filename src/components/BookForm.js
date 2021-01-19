import React from "react"
import Form from "react-bootstrap/Form"
const BookForm = () => {
  const categories = [
    "Action",
    "Biography",
    "History",
    "Horror",
    "Kids",
    "Learning",
    "Sci-Fi",
  ]
  const categoriesOpt = categories.map(cat => <option>{cat}</option>)
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Book Name" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Example select</Form.Label>
        <Form.Control as="select">{categoriesOpt}</Form.Control>
      </Form.Group>
    </Form>
  )
}

export default BookForm
