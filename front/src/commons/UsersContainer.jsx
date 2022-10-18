import React, { useEffect, useState } from "react";
import axios from "axios";
import Users from "../components/Users";


export default ()=> {
  const [users, setUsers]= useState([])
  const [name, setName]= useState("")
  const [lastName, setLastName]= useState("")
  const [dni, setDni]= useState(0)
  
useEffect(()=>{
  axios
    .get("/api/users")
    .then((res) =>  setUsers(res.data))
},[])
 
  const handleChangeName=(e)=> {
   setName(e.target.value)
  }
  const handleChangeLastName=(e)=> {
    setLastName(e.target.value)
   }
   const handleChangeDni=(e)=> {
    setDni(e.target.value)
   }

 const handleSubmit=(e)=> {
    e.preventDefault();
    axios
      .post("/api/users", { name:name, lastname:lastName, dni:dni })
      .then((res) => res.data)
      .then((user) => setUsers( [...users, user] ));
  }

  
    return (
      <div>
       <h2>Crear usuario</h2>
    <form onSubmit={handleSubmit}>
      <label>Nombre: </label>
      <input value={name} onChange={handleChangeName}></input>
      <br />
      <label>Apellido: </label>
      <input value={lastName} onChange={handleChangeLastName}></input>
      <br />
      <label>DNI: </label>
      <input value={dni} onChange={handleChangeDni}></input>
      <br />
      <button type="submit">Submit</button>
    </form>
    <br />
        <Users users={users} />
      </div>
    );
  }

