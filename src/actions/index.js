const createBook = book => {
  return {
    type: "CREATE_BOOK",
    payload: book,
  }
}
const removeBook = book => {
  return {
    type: "REMOVE_BOOK",
    payload: book,
  }
}
const changeFilter = category => {
  return {
    type: "CHANGE_FILTER",
    payload: category,
  }
}

export { createBook, removeBook, changeFilter }
