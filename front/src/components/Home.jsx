import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to our Cars database!</h1>
      <Link to="users">
        <button>Users</button>
      </Link>
      <Link to="cars">
        <button>Cars</button>
      </Link>
    </div>
  );
};

export default Home;
