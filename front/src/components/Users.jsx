import React from "react";
import { Link } from "react-router-dom";

const Users = ({ users }) => {
  console.log(users);
  return (
    <div>
      <h2>USERS</h2>
      <table>
        <thead>
          <tr>
            <td>
              <h4>Nombre</h4>
            </td>
            <td>
              <h4>Apellido</h4>
            </td>
            <td>
              <h4>DNI</h4>
            </td>
          </tr>
        </thead>
        <tbody>
          {users
            ? users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <h4>
                      <Link to={`/users/${user.id}`}> {user.name}</Link>
                    </h4>
                  </td>
                  <td>
                    <h4>
                      <Link to={`/users/${user.id}`}>{user.lastname}</Link>
                    </h4>
                  </td>
                  <td>
                    <h4>
                      <Link to={`/users/${user.id}`}>{user.dni}</Link>
                    </h4>
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
