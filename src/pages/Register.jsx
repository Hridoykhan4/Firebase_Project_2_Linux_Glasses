import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile, sendVerification } = useAuth();
  const nav = useNavigate();

  const navTo = "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const photo = data.photo;

    createNewUser(data.email, data.password)
      .then((result) => {
        updateUserProfile(name, photo).then(() => {
          sendVerification()
            .then(() => {
              console.log('Email send')
            })
          setUser(result.user);
          nav(navTo);
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-[calc(100vh-57px)] flex justify-center items-center px-4 ">
      <div className="w-full max-w-lg bg-black/20 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Register your account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-1">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              defaultValue="Bray Wyatt"
              {...register("name", { required: true })}
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div>
            <label htmlFor="photo" className="block text-sm font-semibold mb-1">
              Photo URL
            </label>
            <input
              id="photo"
              type="text"
              {...register("photo", { required: true })}
              placeholder="Enter Photo"
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            {errors.photo && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

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

          <div className="flex items-center space-x-2">
            <input
              id="terms"
              {...register("terms", { required: true })}
              type="checkbox"
              className="checkbox checkbox-sm"
            />
            <label htmlFor="terms" className="text-sm">
              Accept Terms & Conditions
            </label>
          </div>
          {errors.terms && (
            <span className="text-red-500">This field is required</span>
          )}

          <button
            type="submit"
            className="w-full bg-neutral text-white py-3 rounded-md font-semibold hover:bg-black transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
