import Reat from "react";
import "./UserPage.css"

function UserPage({firstName,lastName,email}){

    return (
        <div className="card">
  
  <h1>{firstName}  {lastName}</h1>
  <p className="title">{email}</p>
  {/* <p>{state}</p> */}
  
 
</div>
    )
}


export default UserPage;