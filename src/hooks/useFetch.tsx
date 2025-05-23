import { useEffect, useState } from "react"
import { api } from "../api"

export const useFetch = <T=any>(endpoint:string , params= {})=>{
  const [data,setData] = useState<T|null>(null)
  const [error, setError] =  useState<T|null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
    api.get(endpoint, {
        params
    })
    .then(res=>setData(res.data))
    .catch(error=>setError(error.response.data))
    .finally(()=>setLoading(false))
  },[endpoint , JSON.stringify(params)])

  return {data,error,loading}
}