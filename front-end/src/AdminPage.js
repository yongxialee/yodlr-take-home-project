import React, {useEffect,useState} from "react";
import axios from "axios";
import UserPage from "./UserPage";
import NavBar from "./NavBar";
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
        <NavBar />
        <h1>User list:</h1>
        <ul class="list-group">
            {users?.map(user=>(
                <li>
                <UserPage firstName={user.firstName}
                    lastName={user.lastName} 
                    email={user.email}
                    // state={user.state}
                />
                </li>
               
             
                
            ))}
            </ul>
            
        </div>
    )
    

}


export default AdminPage;
