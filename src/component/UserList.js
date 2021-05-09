import React, { useState, useEffect } from "react";
import axios from 'axios';
import UserCard from "./UserCard";

const UserList= () =>{
const [users,setUsers]= useState([]);
useEffect(() => {
  axios.get(`https://jsonplaceholder.typicode.com/users`)
  .then(Res => {
  setUsers(Res.data);
 })
  },[])

return (
  <div className="container">
    {users.map((user) => (
      <div key={user.id}>
        
        <UserCard user={user} />
      </div>
    ))}
  </div>
);
};
export default UserList;
