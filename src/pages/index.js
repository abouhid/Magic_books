import React, { useState } from "react"
import App from "../components/App.js"
import { Provider } from "react-redux"
import store from "../reducers"

const IndexPage = () => {
  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  )
}

export default IndexPage
