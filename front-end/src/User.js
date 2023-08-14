import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";

export default function User() {

    // const {id} = useParams()
    // const [user,setUser]=useState(null)

    // console.log(id)
   
    // useEffect(()=>{
       
    //     async function getUser(id){
    //         let res = await axios.get("http://localhost:3000/users/",{params:{id:id}})
    //         setUser(res)
    //         console.log(res)
    //     }getUser()
    // },[id])

  return (
    <div>
    <h1>user</h1>
    </div>
  )
}
