import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import "./index.css"
import DashboardContainer from "./container/DashboardContainer"

const App = () => {
  return (
    <div id="AppRouting">
      <HashRouter>
        <Routes >
          <Route path="/" Component={DashboardContainer} />
        </Routes>
      </HashRouter>
    </div>
  )
}
export default App