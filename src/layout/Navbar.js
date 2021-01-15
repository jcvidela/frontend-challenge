import React from "react";
import { Link } from "react-router-dom";
import { useAuthState, useAuthDispatch } from "../hooks";
import { useHistory } from 'react-router-dom';
import { types } from '../types/types';

export default function () {
  const user = useAuthState();
  const dispatch = useAuthDispatch();
  const history = useHistory();

  function handleLogout() {
    dispatch({
      type: types.logout
    });

    history.replace('/login');
  }

  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark bg-dark"
      style={{ padding: 10 }}
    >
      <Link className="navbar-brand" to="/">
        Improve-In
      </Link>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end">
        <ul className="navbar-nav ml-auto align-items-center">
          <span className="nav-item nav-link text-info">{user.name}</span>
          <button className="nav-item nav-link btn" onClick={handleLogout}>Logout</button>
        </ul>
      </div>
    </nav>
  );
}
