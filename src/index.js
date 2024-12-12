import React from 'react'
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { store } from "./store"
import "./index.css"
import App from "./App"
if (typeof self === "undefined") {
    global.self = global
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)
