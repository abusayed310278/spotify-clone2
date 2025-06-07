import { axiosInstance } from '@/lib/axios'
import { useAuth } from '@clerk/clerk-react'
import { Loader2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const updateApiToken(token:string |null)=>{
    if(token){
        axiosInstance.defaults.headers.common['Authorization']=`Bearer ${token}`
    }else{
        delete axiosInstance.defaults.headers.common['Authorization']

    }
}

const AuthProvider = () => {

    const {getToken,userId}=useAuth()
    const [loading,setLoading]=useState(true)

    useEffect(()=>{

        const initAuth=async()=>{
            try{
                const token=await getToken()
                updateApiToken(token)

            }catch(error:any){
                updateApiToken(null)
                console.log("Error in auth provider",error)
            }finally{
                setLoading(false)
            }
        }

        initAuth()

    },[getToken])


    if(loading)return(
        <div className='h-screen w-full flex items-center justify-center'>
            <Loader2 />
        </div>
    )


  return (
    <div>AuthProvider</div>
  )
}

export default AuthProvider