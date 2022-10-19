import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CarsContainer from "../commons/CarsContainer";
import Cars from "./Cars";

const SingleUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get(`/api/users/${id}`).then((res) => setUser(res.data));
    axios.get("/api/cars").then((res) => setCars(res.data));
  }, []);

  return (
    <div>
      <Link to="/users">
        <h4>Volver a users</h4>
      </Link>
      <h2>
        {user.name} {user.lastname}
      </h2>
      <h4>DNI {user.dni}</h4>
      <br />
      {cars ? (
        <Cars cars={cars.filter((car) => car.ownerId === user.id)} />
      ) : (
        ""
      )}
    </div>
  );
};

export default SingleUser;
