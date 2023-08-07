import React, {useEffect,useState} from "react";
import axios from "axios";
import UserPage from "./UserPage";
function AdminPage(){
    const [users,setUsers]=useState();
    useEffect(()=>{
        const getUsers= async ()=>{
            try {
                let res = await axios.get("http://localhost:3000/users")
               
                console.log(res)
                setUsers(res.data)
            }
            catch(e){
                console.log(e)
            }
          
        }
        getUsers();

    },[])
  

    return (
        <div>
        <h1>User list:</h1>
        
            {users?.map(user=>(
                <UserPage firstName={user.firstName}
                    lastname={user.lastName} 
                    email={user.email}
                    state={user.state}
                />
               
             
                
            ))}
            {/* {Array.isArray(users)
        ? users.map(element => {
            return <li>{element.firstName}</li>;
          })
        : null} */}
        
            
        </div>
    )
    

}


export default AdminPage;
