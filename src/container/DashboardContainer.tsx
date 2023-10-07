import React, { useEffect } from "react"
import { applyAnimationEffect } from "../utils/animateDiv"
import { Dashboard } from "../components/dashboard"

function DashboardContainer() {
    const [open, setOpen] = React.useState(true)
    const toggleDrawer = () => {
        setOpen(!open)
    }
    useEffect(() => {
        applyAnimationEffect("dashboard", "animate")
    }, [])
    const { PRODUCT_NAME: productname, PRODUCT_VER: productversion } =
        process.env
    return (
        <Dashboard
            productName={productname}
            productVersion={productversion}
            toggleDrawer={toggleDrawer}
            open={open}
        />
    )
}

export default DashboardContainer
