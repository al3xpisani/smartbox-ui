import { useEffect } from "react"
import ListExistingDiagrams from "../components/dashboard/ListExistingDiagrams"
import { fetchDiagram } from "../utils/fetch"
import React from "react";
import { AxiosResponse } from "axios";
import { ApiResponse, workflowState } from "../types";
import { isAuth } from "../utils/isAuth";
import { toast } from "react-toastify";
import { registerSetWorkflow } from "../redux/slices/workflows/workflows.slice";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { serializableItems } from "../utils/serializableItems";

const ListExistingDiagramsContainer = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false)
    const workflowData = useSelector((state: workflowState): ApiResponse[] => state.workflow.workflowData);
    const dispatch = useDispatch();

 useEffect(() => {
     fetchDiagram(
         {
             BASE_URL: process.env.BASE_URL,
             HTTP_LIST_DIAGRAM: process.env.HTTP_LIST_DIAGRAM
         },
         String(process.env.token)
     ).then((response: AxiosResponse<ApiResponse>) => {
         const isValidToken = isAuth(response)
         setIsAuthenticated(isValidToken)
         if (!isValidToken) {
             toast.error("Invalid token. Please refresh it")
         } else {
             const serializabledItems = serializableItems(
                 ["config", "headers", "request"],
                 response
             )
             dispatch(registerSetWorkflow(serializabledItems))
         }
     })
 }, [])
    return (
        <>
        { isAuthenticated && workflowData && <ListExistingDiagrams savedDiagrams={workflowData} />}
        </>
    )
}
export default ListExistingDiagramsContainer