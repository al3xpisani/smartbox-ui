import { AxiosResponse } from "axios"
import { ApiResponse } from "../types"

export const isAuth = (response: AxiosResponse<ApiResponse>) => {
  const { status } = response ?? {}
  const { data } = response || {};
  const isAuthenticated = data?.isAuthenticated?.isAuthenticated;

  if(isAuthenticated !== undefined && !isAuthenticated){
    return isAuthenticated
  }
  return status === 200 || status === 201 || status === 204 || status === 403 ? true : false
}