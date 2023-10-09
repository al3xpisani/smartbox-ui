import * as React from 'react';
import Grid from "@mui/material/Grid"
import Title from "./Title"
import Button from "@mui/material/Button"
import { activeIdWorkflowType } from "../../types"

export default function WorkFlow({
    activeWorkflow,
    handleUpdate
}: {
    activeWorkflow: activeIdWorkflowType
    handleUpdate: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}) {
    return (
        <>
            <Grid
                id="workflowArea"
                sx={{
                    p: 0,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}
            >
                <Title>
                    WorkFlow{" "}
                    {activeWorkflow?.id && <i>({activeWorkflow.name})</i>}
                </Title>
                <Button variant="contained" onClick={handleUpdate}>
                    Update
                </Button>
            </Grid>
            <Grid></Grid>
        </>
    )
}
