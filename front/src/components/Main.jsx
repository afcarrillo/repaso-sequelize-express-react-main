import React from "react";
import { Route, Routes } from "react-router-dom";

import UsersContainer from "../commons/UsersContainer";
import CarsContainer from "../commons/CarsContainer";

import Home from "./Home";
import SingleUser from "./SingleUser";
import SingleCar from "./SingleCar";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UsersContainer />} />
      <Route path="/cars" element={<CarsContainer />} />
      <Route path="/users/:id" element={<SingleUser />} />
      <Route path="/cars/:id" element={<SingleCar />} />
    </Routes>
  );
};

export default Main;
