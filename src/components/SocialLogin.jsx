import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { logInWithGoogle, logInWithTwitter, logInWithFacebook, setUser } =
    useAuth();
  const navigate = useNavigate();

  const { state } = useLocation();

  const handleFacebook = () => {
    logInWithFacebook().then(() => {
      navigate(state ? state : "/products");
    });
  };

  const handleTwitter = () => {
    logInWithTwitter().then(() => {
      navigate(state ? state : "/products");
    });
  };

  const handleGoogle = () => {
    logInWithGoogle().then((result) => {
      setUser(result.user);
      console.log(result.user)
      navigate(state ? state : "/products");
    });
  };

  return (
    <div className="space-y-3">
      <button
        onClick={handleGoogle}
        className="btn w-full rounded-full border border-gray-300"
      >
        <FaGoogle className="text-red-500" />
        Continue with Google
      </button>
      <button
        onClick={handleFacebook}
        className="btn w-full rounded-full border border-gray-300"
      >
        <FaFacebookF className="text-blue-600" />
        Continue with Facebook
      </button>
      <button
        onClick={handleTwitter}
        className="btn w-full rounded-full border border-gray-300"
      >
        <FaTwitter className="text-blue-600" />
        Continue with Twitter
      </button>
    </div>
  );
};

export default SocialLogin;
