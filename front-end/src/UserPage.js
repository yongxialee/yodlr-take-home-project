import Reat from "react";
import "./UserPage.css"

function UserPage({firstName,lastName,email,state}){

    return (
        <div class="card">
  
  <h1>{firstName} {lastName}</h1>
  <p class="title">{email}</p>
  <p>{state}</p>
  
 
</div>
    )
}


export default UserPage;