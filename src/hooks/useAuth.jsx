import { useContext } from "react";
import FirebaseContext from "../contexts/FirebaseContext";

const useAuth = () => {
  const all = useContext(FirebaseContext);
  return all;
};

export default useAuth;
