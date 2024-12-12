import axios from 'axios'
import { ApiResponse } from "../types"

const fetchDiagram = async(settings: any, token: string) => {
  const { BASE_URL: baseURL, HTTP_LIST_DIAGRAM: httpPath } = settings
  console.log("..........fetc ", process.env.token)
  const instance =  {
    method: 'GET',
    url: baseURL.concat(`${httpPath}`),
    headers: {
      'Authorization': 'Bearer '.concat(token),
      'Content-Type': 'application/json',
    },
  }
  return axios.request<ApiResponse> (instance)
}

const fetchDiagramById = async(settings: any, token: string, id: React.Key | null | undefined) => {
  const { BASE_URL: baseURL, HTTP_LIST_DIAGRAM: httpPath } = settings
  const instance =  {
    method: 'GET',
    url: baseURL.concat(`${httpPath}`).concat(id),
    headers: {
      'Authorization': 'Bearer '.concat(token),
      'Content-Type': 'application/json',
    },
  }
  return axios.request<ApiResponse> (instance)
}

const createDiagram = async(settings: any, token: string, newDiagram: object) => {
  const { BASE_URL: baseURL, HTTP_LIST_DIAGRAM: httpPath } = settings
  const instance =  {
    method: 'POST',
    url: baseURL.concat(`${httpPath}`),
    headers: {
      'Authorization': 'Bearer '.concat(token),
      'Content-Type': 'application/json',
    },
    data : newDiagram
  }
  return axios.request<ApiResponse> (instance)
}

const updateDiagram = async(settings: any, token: string,id: React.Key | null | undefined) => {
  const { BASE_URL: baseURL, HTTP_LIST_DIAGRAM: httpPath } = settings
  const instance = {
      method: "PUT",
      url: baseURL.concat(`${httpPath}`).concat(id),
      headers: {
          Authorization: "Bearer ".concat(token),
          "Content-Type": "application/json"
      },
      data: {
          body: {
              workflow: [
                  {
                      key: 0,
                      category: "Start",
                      loc: "155 660",
                      text: "Start"
                  },
                  {
                      key: 2,
                      category: "Conditional",
                      loc: "145 660",
                      text: "If > 2"
                  },
                  {
                      key: 3,
                      category: "action",
                      loc: "135 660",
                      text: "Action"
                  },
                  {
                      key: 4,
                      category: "End",
                      loc: "175 660",
                      text: "End"
                  }
              ],
              linkDataArray: [
                  {
                      from: 0,
                      to: 2
                  },
                  {
                      from: 2,
                      to: 3
                  },
                  {
                      from: 3,
                      to: 4
                  }
              ]
          }
      }
  }
  return axios.request<ApiResponse> (instance)
}
const deleteDiagram = async(settings: any, token: string,id: React.Key | null | undefined) => {
  const { BASE_URL: baseURL, HTTP_LIST_DIAGRAM: httpPath } = settings
  const instance =  {
    method: 'DELETE',
    url: baseURL.concat(`${httpPath}`).concat(id),
    headers: {
      'Authorization': 'Bearer '.concat(token),
      'Content-Type': 'application/json',
    }
  }
  return axios.request<ApiResponse> (instance)
}

export { fetchDiagram, createDiagram, updateDiagram, deleteDiagram, fetchDiagramById }
