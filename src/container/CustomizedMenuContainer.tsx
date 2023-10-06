import * as React from 'react';
import CustomizedMenu from "../components/contextMenu/CustomizedMenu";
import { deleteDiagram, fetchDiagramById } from "../utils/fetch";
import { isAuth } from "../utils/isAuth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { serializableItems } from "../utils/serializableItems";
import { deleteSetWorkflow, loadActiveWorkflow } from "../redux/slices/workflows/workflows.slice";

export default function CustomizedMenus({id}: {id: React.Key | null | undefined}) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
   const handleClick =  (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
   };
  const handleLoad = async (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const loadResposne = await fetchDiagramById({BASE_URL: process.env.BASE_URL,HTTP_LIST_DIAGRAM: process.env.HTTP_LIST_DIAGRAM}, String(process.env.token), id)
    const serializabledItems = serializableItems(["config", "headers", "request"], loadResposne)
    console.log("sssss ", serializabledItems)
    if(!isAuth(loadResposne)) {
        toast.error("User not authenticated. Refresh the token")
        return
    }
    dispatch(loadActiveWorkflow(serializabledItems))
    toast.success(`${id} - Workflow loaded with success`)
    setAnchorEl(null);
  };
  const handleDelete = async (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const deleteResponse = await deleteDiagram({BASE_URL: process.env.BASE_URL,HTTP_LIST_DIAGRAM: process.env.HTTP_LIST_DIAGRAM}, String(process.env.token), id)
    const serializabledItems = serializableItems(["config", "headers", "request"], deleteResponse)
    if(!isAuth(deleteResponse)) {
        toast.error("User not authenticated. Refresh the token")
        return
    }
    dispatch(deleteSetWorkflow(serializabledItems))
    toast.success(`${id} - Workflow deleted with success`)
    setAnchorEl(null);
  };

    return (
      <CustomizedMenu anchorEl={anchorEl}
        open={open}
        handleClick={handleClick}
        handleLoad={handleLoad}
        handleDelete={handleDelete} />
  );
}

