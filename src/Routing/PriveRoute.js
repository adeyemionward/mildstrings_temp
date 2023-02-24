import React from 'react';
import { Navigate, Outlet, useLocation } from "react-router";

const useAuth = () => {
  //const token = window.localStorage.getItem('token') || {};
  let token = true;
  // return token && token !== undefined ? true : false;
  return token
}

const PriveRoute = () => {
  const isAuth = useAuth();
  //console.log(isAuth)
  const location = useLocation();
  return isAuth ? <Outlet /> : <Navigate replace to='/auth/signin' state={{ from: location }} />;
}

export default PriveRoute;