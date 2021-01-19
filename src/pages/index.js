import React from "react"
import { Link } from "gatsby"
import App from "../components/App.js"
import { Provider } from "react-redux"
import store from "../reducers/books"

const IndexPage = () => (
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
)

export default IndexPage
