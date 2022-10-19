import React from "react";
import { Link } from "react-router-dom";

const Cars = ({ cars }) => {
  return (
    <div>
      <h3>Cars</h3>
      <table>
        <thead>
          <tr>
            <th>
              <h4>Brand</h4>
            </th>
            <th>
              <h4>Model</h4>
            </th>
            <th>
              <h4>Price</h4>
            </th>
            <th>
              <h4>Year</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          {cars
            ? cars.map((car) => (
                <tr key={car.id}>
                  <td>
                    <Link to={`/cars/${car.id}`}>{car.brand}</Link>
                  </td>
                  <td>
                    <Link to={`/cars/${car.id}`}>{car.model}</Link>
                  </td>
                  <td>
                    <Link to={`/cars/${car.id}`}>{car.year}</Link>
                  </td>
                  <td>
                    <Link to={`/cars/${car.id}`}>{car.price}</Link>
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default Cars;
