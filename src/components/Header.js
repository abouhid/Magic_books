import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <div className="panel">
      <h1 className="logo">Magic Books</h1>
      <h4 className="BOOKS">Books</h4>
      <h4 className="CATEGORIES">Categories</h4>

      <div className="panel-icon">
        <FontAwesomeIcon icon={faUser} className="profile-icon" />
      </div>
    </div>
  )
}

export default Header
