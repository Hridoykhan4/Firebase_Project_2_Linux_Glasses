import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { signInUser, setUser } = useAuth();

  const nav = useNavigate();

  const { state } = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        setUser(result.user);
        nav(state ? state : "/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-[calc(100vh-57px)] flex justify-center items-center px-4 ">
      <div className="w-full max-w-lg bg-black/20 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login your account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            {errors.password && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-neutral text-white py-3 rounded-md font-semibold hover:bg-black transition"
          >
            Login
          </button>
        </form>
        <div className="flex items-center gap-2 mt-4 mb-2">
          <div className="border-b border-gray-300 w-full"></div>
          <span className="text-sm text-gray-400">Or</span>
          <div className="border-b border-gray-300 w-full"></div>
        </div>
        <SocialLogin></SocialLogin>

        <p className="pt-3 ">
          New In this website?{" "}
          <Link to="/register" className="link text-blue-900 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
