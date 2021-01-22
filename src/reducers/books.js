const bookReducer = (book = [], action) => {
  switch (action.type) {
    case "CREATE_BOOK":
      return [...book, action.payload]
    case "REMOVE_BOOK":
      return book.filter(el => action.payload.id != el.id)

    default:
      return book
  }
}
export default bookReducer
