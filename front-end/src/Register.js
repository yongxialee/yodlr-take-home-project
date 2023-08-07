import React,{ useState }  from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Register(){

    const [formData,setFormData]=useState({
        firstName:'',
        lastName:'',
        email:"",
    
        state:""
    })
    const navigate = useNavigate();


    const handleSubmit= async (e)=>{
        e.preventDefault();
        
        const userData={
            firstName:formData.firstName,
            lastName:formData.lastName,
            email:formData.email,
            state:formData.state

        };
        
        try{
            let res = await axios.post("http://localhost:3000/users",userData)
           console.log(res)
            
        }catch(e){
            console.log(e)

        }
        alert(`Successfully created user, ${userData.firstName}`)
        setFormData({
            firstName:'',
            lastName:'',
            email:"",
            state:""
        })
        navigate('/adminPage');

    };
    const handleChange=(e)=>{
        
        const {name,value}=e.target;
        setFormData({...formData,[name]:value})
        console.log(formData)
       
    }
    
return (
    <div>
        <h1>Register here</h1>
        <form onSubmit={handleSubmit} action="/adminPage"> 
        <label>First Name: </label>
            <input type="text" 
            name="firstName" 
            placeholder="First Name" 
            id="firstName" 
            value={formData.firstName}
            onChange={handleChange}
            />
        
        <label>Last Name: </label>
            <input type="text" 
            name="lastName" 
            placeholder="Last Name" 
            onChange={handleChange}
            value={formData.lastName}
            
            />
      
        <label>Email: </label>
            <input type="email" 
            name="email" 
            placeholder="Email" 
            onChange={handleChange}
            value={formData.email}
            />
     
        <label>State: </label>
            <select name="state" id="state"  onChange={handleChange} 
            value={formData.state}>
                <option value="">--Please choose an option--</option>
                <option value="pending">pending</option>
                <option value="active">active</option>
            </select>
        
        <button>Sign up</button>
        </form>
       
    </div>
)


}




export default Register;