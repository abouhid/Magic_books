import React from "react"

const Book = ({ book }) => {
  return (
    <ul>
      <li>
        Book ID:{book.id} - Book title:{book.title} - Book category:
        {book.category}
      </li>
    </ul>
  )
}

export default Book

// import React from "react"
// import PropTypes from "prop-types"
// import { connect } from "react-redux"

// export const Book = (props) => {
//     return (
//         <div>

//         </div>
//     )
// }

// Book.propTypes = {
//     props: PropTypes
// }

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Book)
