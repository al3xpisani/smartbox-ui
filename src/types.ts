import { Key, ReactNode } from "react";

interface WorkflowItem {
  category: string;
  key: number;
  text: string;
  loc: string;
}

interface LinkDataItem {
    from: number
    to: number
}  

export interface workflowState {
    workflow: {
        workflowData: any
    }
}

export type activeIdWorkflowType = {
    workflow: any
    id: string
    name: ReactNode
}

export interface ApiResponse {
    id: Key | null | undefined
    creation: ReactNode
    name: ReactNode
    status: string
    isAuthenticated: {
        isAuthenticated: boolean
    }
    data: {
        id: string | Key | null | undefined
        creation: string
        body: {
            workflow: WorkflowItem[]
            linkDataArray: LinkDataItem[]
        }
        name: string
    }[]
}