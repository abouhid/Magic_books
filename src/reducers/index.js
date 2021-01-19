function bookReducer(book = null, action) {
  switch (action.type) {
    case "CREATE_BOOK":
      return { ...book, ...action.payload }
    case "REMOVE_BOOK":
      return "book removed"
    default:
      return book
  }
}

export default bookReducer()
