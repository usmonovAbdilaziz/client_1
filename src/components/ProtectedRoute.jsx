// src/components/ProtectedRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

 const ProtectedRoute = ({ element: Component, ...rest }) => {
  const auth = useAuth();

  return (
    <Route
      {...rest}
      element={auth.user ? <Component /> : <Navigate to="/login" replace />}
    />
  );
};
export default ProtectedRoute;
