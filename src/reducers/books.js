const bookReducer = (
  book = [
    {
      id: Math.floor(Math.random() * 500),
      title: "The Winds of winter",
      category: "Sci-Fi",
      author: "George R. R. Martin",
    },
    {
      id: Math.floor(Math.random() * 500),
      title: "Dr. Sleep",
      category: "Horror",
      author: "Stephen King",
    },
  ],
  action
) => {
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
