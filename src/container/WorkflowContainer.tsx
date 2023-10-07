import * as React from "react"
import WorkFlow from "../components/dashboard/WorkFlow"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import { updateDiagram } from "../utils/fetch"
import { isAuth } from "../utils/isAuth"
import { useTheme } from "@mui/material/styles"
import { activeIdWorkflowType } from "../types"

export const WorkflowContainer = () => {
    const theme = useTheme()
    const activeWorkflow = useSelector(
        (state: activeIdWorkflowType): activeIdWorkflowType =>
            state.workflow.activeIdWorkflow
    )
    const handleUpdate = async () => {
        if (!activeWorkflow.id) {
            toast.warn(
                "Pick one diagram at the left pane and load it before save"
            )
            return
        }
        const action = await updateDiagram(
            {
                BASE_URL: process.env.BASE_URL,
                HTTP_LIST_DIAGRAM: process.env.HTTP_LIST_DIAGRAM
            },
            String(process.env.token),
            activeWorkflow.id
        )
        if (!isAuth(action)) {
            toast.error("User not authenticated. Refresh the token")
            return
        }
        toast.success(`${activeWorkflow.id} - Workflow updated with success`)
    }
    return (
        <WorkFlow activeWorkflow={activeWorkflow} handleUpdate={handleUpdate} />
    )
}
