import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function SearchForm({SearchFunc}) {
    const [formData,setFormData]=useState({name:""})
    const navigate = useNavigate();

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData(data=>({...data,[name]:value}))
    }

    async function handleSubmit(e){
        e.preventDefault();
        
        try{
            await SearchFunc(formData.name);
        }catch(e){
            console.log(e)
        }   
        // navigate(`/users/`); 
      
    }
  return (
    <div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">        
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
                <input className="form-control me-2" type="search" placeholder="Search User by ID" aria-label="Search" onChange={handleChange}/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
  )
}
