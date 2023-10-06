import { AxiosResponse } from "axios";
import React,{ useEffect } from "react"
import { ApiResponse } from "../types";
import { applyAnimationEffect } from "../utils/animateDiv";
import { fetchDiagram } from "../utils/fetch";
import { Dashboard } from "../components/dashboard";

function DashboardContainer() {
    const [open, setOpen] = React.useState(true);
    // const [diagrams, setDiagrams] = React.useState<[PromiseSettledResult<AxiosResponse<ApiResponse[], any>>] | undefined>();
    const toggleDrawer = () => {
      setOpen(!open);
    };
  // useEffect(()=>{
  //   Promise.allSettled([
  //     fetchDiagram({BASE_URL: process.env.BASE_URL,HTTP_LIST_DIAGRAM: process.env.HTTP_LIST_DIAGRAM}, String(process.env.token)),
  //   ]).then((data)=>{
  //     setDiagrams(data)
  //     applyAnimationEffect("dashboard","animate")
  //   })
  // },[])

  applyAnimationEffect("dashboard","animate")
  const {PRODUCT_NAME: productname, PRODUCT_VER: productversion} = process.env
  return (
    <Dashboard productName={productname} 
        productVersion ={productversion} 
        toggleDrawer={toggleDrawer}
        open={open}/>
  )
}

export default DashboardContainer
