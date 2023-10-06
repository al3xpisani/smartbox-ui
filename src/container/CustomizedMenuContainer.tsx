import * as React from 'react';
import CustomizedMenu from "../components/contextMenu/CustomizedMenu";
import { deleteDiagram, updateDiagram } from "../utils/fetch";
import { isAuth } from "../utils/isAuth";
import { toast } from "react-toastify";

export default function CustomizedMenus({id}: {id: React.Key | null | undefined}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
   const handleClick =  (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
   };
  const handleLoad = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorEl(null);
    alert(`Workflow ${id} loaded`)
  };
  const handleDelete = async (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const action = await deleteDiagram({BASE_URL: process.env.BASE_URL,HTTP_LIST_DIAGRAM: process.env.HTTP_LIST_DIAGRAM}, String(process.env.token), id)
    if(!isAuth(action)) {
        toast.error("User not authenticated. Refresh the token")
        return
    }
    toast.success("Workflow deleted with success")
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
