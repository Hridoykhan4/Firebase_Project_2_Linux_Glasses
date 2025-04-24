import { Link, NavLink } from "react-router-dom";
import FirebaseContext from "../contexts/FirebaseContext";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { user, signOutUser } = useAuth(FirebaseContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      {user ? (
        <>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </>
      ) : (
        ""
      )}

      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="text-xl">LinuX Glasses</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="">
                <img
                  className="w-16 object-cover rounded-full h-16 "
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co.com/wm9RMN8/32ba8529-6b49-4757-b8cd-142f464cdc64photo.jpg"
                  }
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="ml-3 btn btn-ghost btn-sm ">
                  {user && user?.email}
                </button>
              </li>

              <li>
                <button className="btn btn-sm  btn-ghost">
                  {user?.displayName || "user name not found"}
                </button>
              </li>

              <li>
                <button onClick={signOutUser} className="btn btn-sm  btn-ghost">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm  btn-ghost">Login</button>
          </Link>
        )}

        <p className="ml-3 hidden sm:block">{user && user?.email}</p>
      </div>
    </div>
  );
};

export default Header;
