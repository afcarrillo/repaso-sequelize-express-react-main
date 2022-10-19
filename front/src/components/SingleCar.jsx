import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const SingleCar = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    axios.get(`/api/cars/${id}`).then((res) => setCar(res.data));
  }, []);

  return (
    <div>
      <Link to="/cars">
        <h4>Volver a cars</h4>
      </Link>
      <h2>
        {car.brand} {car.model}
      </h2>
      <h4>Year {car.year}</h4>
      <h4>Price {car.price}</h4>
      {car.owner ? (
        <h4>
          Owner{" "}
          <Link to={`/users/${car.owner.id}`}>
            {car.owner.name} {car.owner.lastname}
          </Link>
        </h4>
      ) : (
        ""
      )}
    </div>
  );
};

export default SingleCar;
