import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';

const PrivateRoute = ({ element }) => {
  const estasautenticado = !!Cookies.get("mi-token");

  if (estasautenticado) {
    return element;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;



