import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "./useAuth";
import { useContext } from 'react';
import { all } from "axios";
  

const ProtectedRoutes = ({allowedRoles}) => {
  const {auth} = useAuth();
  console.log(auth.roles);
    const location = useLocation();


    console.log("aa", allowedRoles)

    // zmienić żeby szukało roli jak bedzie wiecej w allowed
  return( auth?.roles === allowedRoles
   ? <Outlet /> 
   : auth.user 
   ? <Navigate to="/unauthorized" state={{ from: location }} replace />
   :<Navigate to="/login" state={{from: location}} replace/>
  );
}

export default ProtectedRoutes;