import React from "react";
import { Route, Routes,  } from "react-router-dom";
import UsersContainer from "../commons/UsersContainer";
import SingleUser from "./SingleUser";


const Main = () => (
 
  <div>
    
    <Routes>
      <Route path="/" element={<UsersContainer/>} />
     <Route path="/users/:id" element={<SingleUser  />}/>
    </Routes>
  </div>
);

export default Main;
