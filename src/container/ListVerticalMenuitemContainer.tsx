import * as React from 'react';
import { MainListItems } from "../components/dashboard/listVerticalMenuitems";
import { createDiagram } from "../utils/fetch";
import { toast } from 'react-toastify';
import { isAuth } from "../utils/isAuth";
import { useDispatch } from "react-redux";
import { registerSetWorkflow } from "../redux/slices/workflows/workflows.slice";
import { serializableItems } from "../utils/serializableItems";

const newDiagram = {
    "body": {
    "workflow": [
      {
        "key": 0,
        "category": "Start",
        "loc": "155 660",
        "text": "Start"
      },
      {
        "key": 2,
        "category": "Conditional",
        "loc": "145 660",
        "text": "If > 4"
      },
      {
        "key": 3,
        "category": "action",
        "loc": "135 660",
        "text": "Action"
      },
      {
        "key": 4,
        "category": "End",
        "loc": "175 660",
        "text": "End"
      }
    ],
    "linkDataArray": [
      {
        "from": 0,
        "to": 2
      },
      {
        "from": 2,
        "to": 3
      },
      {
        "from": 3,
        "to": 4
      }
    ]
  }
  }

const MainListItemsContainer = () => {
    const dispatch = useDispatch();

    const handleOnCreateDiagram = async () => {
        const createResponse = await createDiagram({BASE_URL: process.env.BASE_URL,HTTP_LIST_DIAGRAM: process.env.HTTP_LIST_DIAGRAM}, String(process.env.token), newDiagram)
        const serializabledItems = serializableItems(["config", "headers", "request"], createResponse)
        if(!isAuth(createResponse)) {
            toast.error("User not authenticated. Refresh the token")
            return
        }
        toast.success("Default workflow created with success")
        dispatch(registerSetWorkflow(serializabledItems))
    }
    return (
        <MainListItems handleOnCreateDiagram={handleOnCreateDiagram} />
    )
}
export default MainListItemsContainer