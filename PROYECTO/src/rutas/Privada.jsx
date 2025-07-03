import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';

const PrivateRoute = ({ element }) => {
  const estasautenticado = !!Cookies.get("access_token");
const rol = Cookies.get("user_role");

  if (estasautenticado && rol === "admin") {
    return element;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;



