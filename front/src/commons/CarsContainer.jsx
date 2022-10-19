import React, { useEffect, useState } from "react";
import axios from "axios";
import Cars from "../components/Cars";

const CarsContainer = () => {
  const [users, setUsers] = useState([]);
  const [cars, setCars] = useState([]);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(0);
  const [price, setPrice] = useState(0);
  const [ownerId, setOwnerId] = useState(1);

  useEffect(() => {
    axios.get("/api/cars").then((res) => setCars(res.data));
    axios.get("/api/users").then((res) => setUsers(res.data));
  }, []);

  const handleChangeId = (e) => {
    setOwnerId(e.target.value);
  };

  const handleChangeBrand = (e) => {
    setBrand(e.target.value);
  };

  const handleChangeModel = (e) => {
    setModel(e.target.value);
  };

  const handleChangeYear = (e) => {
    setYear(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/cars", { brand, model, year, price, ownerId })
      .then((res) => res.data)
      .then((car) => setCars([...cars, car]));
  };
  return (
    <div>
      <h2>Crear auto</h2>
      <form onSubmit={handleSubmit}>
        <label>Propietario:</label>
        <select onChange={handleChangeId}>
          {users
            ? users.map((user) => (
                <option key={user.name} value={user.id}>
                  {user.name} {user.lastname}
                </option>
              ))
            : ""}
        </select>
        <br />
        <label>Marca: </label>
        <input value={brand} onChange={handleChangeBrand}></input>
        <br />
        <label>Modelo: </label>
        <input value={model} onChange={handleChangeModel}></input>
        <br />
        <label>Año: </label>
        <input value={year} onChange={handleChangeYear}></input>
        <br />
        <label>Precio: </label>
        <input value={price} onChange={handleChangePrice}></input>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <Cars cars={cars} />
    </div>
  );
};

export default CarsContainer;
