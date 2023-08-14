import React from 'react'
import './NavBar.css'
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import SearchForm from './SearchForm';
import axios from "axios";
export default function NavBar() {
    
    // const [users,setUsers]=useState([])
    // useEffect(()=>{
    //     async function getUsers(){
    //         const res = await axios.get('http://localhost:3000/users/:id');
    //         setUsers(res)
    //     }
    //     getUsers();
    // },[])

    // async function searchUser(searchTerm){
    //     let res;
    //     if(searchTerm===""){
    //         res = await axios.get('http://localhost:3000/users/');

    //     }else{
    //         res = await axios.get('http://localhost:3000/users/',{params:{id:searchTerm}});
    //         console.log(res)
    //     }
    // }
   
   
  return (
    <Navbar>
    <Nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavItem className="container-fluid">
        <a className="navbar-brand" href="/adminPage">AdminDashboard</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <SearchForm  />
      
      </NavItem>
        </Nav>

    </Navbar>
  )
}
