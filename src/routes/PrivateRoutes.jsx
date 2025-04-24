import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import ErrorAlert from "../components/ErrorAlert";

const PrivateRoutes = ({ children }) => {
  const { pathname } = useLocation();

  const { user, loading } = useAuth();

  if (loading) {
    return <ErrorAlert></ErrorAlert>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={pathname}></Navigate>;
};

export default PrivateRoutes;
