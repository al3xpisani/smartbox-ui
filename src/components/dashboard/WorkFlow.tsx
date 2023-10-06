import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Title from './Title';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { updateDiagram } from "../../utils/fetch";
import { isAuth } from "../../utils/isAuth";
import { toast } from "react-toastify";
import { useSelector } from 'react-redux';

export default function WorkFlow() {
  const theme = useTheme();
  const activeWorkflow = useSelector((state: any): any => state.workflow.activeIdWorkflow);
  const handleUpdate = async () => {
    if(!activeWorkflow.id) {
      toast.warn("Pick one diagram at the left pane and load it before save")
      return
    }
    const action = await updateDiagram({BASE_URL: process.env.BASE_URL,HTTP_LIST_DIAGRAM: process.env.HTTP_LIST_DIAGRAM}, String(process.env.token), activeWorkflow.id)
    if(!isAuth(action)) {
        toast.error("User not authenticated. Refresh the token")
        return
    }
    toast.success(`${activeWorkflow.id} - Workflow updated with success`)
  };

  return (
    <>
      <Grid sx={{ p: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Title>WorkFlow { activeWorkflow?.id && <i>({activeWorkflow.name})</i>}</Title>
        <Button variant="contained" onClick={handleUpdate} >Update</Button>
      </Grid>
    </>
  );
}
