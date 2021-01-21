import React from "react"
const CategoryFilter = ({ handleFilterChange }) => {
  const categories = [
    "All",
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

  return <select onChange={handleFilterChange}>{categoriesOpt}</select>
}

export default CategoryFilter
