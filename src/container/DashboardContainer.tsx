import React, { useLayoutEffect } from "react"
import { applyAnimationEffect } from "../utils/animateDiv"
import { Dashboard } from "../components/dashboard"

export const DashboardContainer = () => {
    const [open, setOpen] = React.useState(true)
    const toggleDrawer = () => {
        setOpen(!open)
    }
    useLayoutEffect(() => {
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

// export default DashboardContainer
