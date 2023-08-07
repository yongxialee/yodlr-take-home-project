import React from "react";
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";
import AdminPage from "./AdminPage";

// import UsersList from "./UsersList";


function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route exact path="/register" element={<Register />}>
      

      </Route>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/adminPage" element={<AdminPage />}></Route>
     
      </Routes>
    </Router>
   {/* <UsersList /> */}
     
    </div>
  );
}

export default App;
