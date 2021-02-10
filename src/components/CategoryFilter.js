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

  return (
    <div className="categoryFilter">
      <span className="filter-label">Filter by category:</span>{" "}
      <select className="select" onChange={handleFilterChange}>
        {categoriesOpt}
      </select>
    </div>
  )
}

export default CategoryFilter
