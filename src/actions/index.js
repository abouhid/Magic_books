function createBook(book) {
  return {
    type: "CREATE_BOOK",
    payload: book,
  }
}
function removeBook(book) {
  return {
    type: "REMOVE_BOOK",
    payload: book,
  }
}

export { createBook, removeBook }
