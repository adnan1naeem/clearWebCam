import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <ul>
      <li>
        <Link to="/notfound">Not Found</Link>
      </li>
      <li>
        <Link to="/success">Success</Link>
      </li>
      <li>
        <Link to="ready">Ready</Link>
      </li>
    </ul>
  );
};
export { Home };
