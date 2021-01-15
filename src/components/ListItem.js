import React from "react";
import { Link } from "react-router-dom";

export default function ({ name, childRoute = false }) {
  return (
    <Link 
      className="customAnchor"
      to={childRoute ? childRoute : '/'}
    >
      <li className="list-group-item list-item">
        <h3>{name}</h3>
      </li>
    </Link>
  );
}
