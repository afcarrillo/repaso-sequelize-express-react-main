import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default () => {
const {id}=  useParams()
const [user, setUser]= useState({})
useEffect(()=>{
  axios
  .get(`/api/users/${id}`)
  .then((res)=> setUser(res.data))

},[])
console.log(user)
return(
  <div>
    <Link to="/">
      <h4>Volver a users</h4>
    </Link>
    <h2>
      {user.name} {user.lastname}
    </h2>
    <h4>DNI {user.dni}</h4>
    <br />
    <h3>Cars</h3>
    {/* map de cars pertenecientes al usuario */}
  </div>
)
}
