import { useEffect } from "react"

const useTitle = title =>{
  useEffect(()=>{
    document.title = `${title} -  Dance Academy`
  },[title])
}
export default useTitle
