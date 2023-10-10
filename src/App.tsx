import React, { Suspense, lazy } from "react"
import { Routes, Route, HashRouter } from "react-router-dom"
import "./index.css"
import { Loading } from "./components/loading"

const DashboardContainer = lazy(() =>
    import("./container/DashboardContainer").then(({ DashboardContainer }) => ({
        default: DashboardContainer
    }))
)
const App = () => {
    return (
        <div id="AppRouting">
            <Suspense fallback={<Loading />}>
                <HashRouter>
                    <Routes>
                        <Route path="/" Component={DashboardContainer} />
                    </Routes>
                </HashRouter>
            </Suspense>
        </div>
    )
}
export default App
