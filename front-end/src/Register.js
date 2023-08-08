import React,{ useState }  from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./Register.css"

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
<section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
               
        
        <form onSubmit={handleSubmit} > 
            <div class="row">
            <div class="col-12">
                <label className="form-label">First Name: </label>
                <input className="form-control form-control-lg" type="text" 
            name="firstName" 
            placeholder="First Name" 
            id="firstName" 
            value={formData.firstName}
            onChange={handleChange}
            />
                

            </div>
            </div>

            <div class="row">
            <div class="col-12">
                    <label>Last Name: </label>
                    <input className="form-control form-control-lg"type="text" 
            name="lastName" 
            placeholder="Last Name" 
            onChange={handleChange}
            value={formData.lastName}
            
                    />
                  

            </div>
            </div>
            <div class="row">
            <div class="col-12">
                <label>Email: </label>
                <input className="form-control form-control-lg" type="email" 
            name="email" 
            placeholder="Email" 
            onChange={handleChange}
            value={formData.email}
            />
            </div>
            </div>

           <div class="row">
           <div class="col-12">
                <label>State: </label>
                <select name="state" id="state" className="select form-control-lg" onChange={handleChange} 
            value={formData.state}>
                <option value="" disabled>choose an option</option>
                <option value="pending">pending</option>
                <option value="active">active</option>
                </select>
                </div>
              </div>
              <div class="mt-4 pt-2">
            <button className="btn btn-primary btn-lg">Sign up</button>
            </div>        
        </form>
        </div>
        </div>
      </div>
    </div>
  
    </div>
   
</section> 
)
}




export default Register;