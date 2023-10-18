import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png';
import { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, userLogout } = useContext(authContext);
  const handleLogout = () => {
    userLogout()
    .then(res => {
      console.log(res);
      Swal.fire({
        position: 'center-center',
        icon: 'success',
        title: 'Logout Successfully',
        showConfirmButton: false,
        timer: 2000
      })
    })
    .catch(error => {
      console.log(error.message);
    })
  }
  const listItems = (
    <>
      <NavLink to="/">
        {({ isActive }) => (
          <span className={isActive ? "text-red-500" : ""}>Home</span>
        )}
      </NavLink>
      <NavLink to="/addProduct">
        {({ isActive }) => (
          <span className={isActive ? "text-red-500" : ""}>Add Product</span>
        )}
      </NavLink>
      <NavLink to="/myCart">
        {({ isActive }) => (
          <span className={isActive ? "text-red-500" : ""}>My Cart</span>
        )}
      </NavLink>
      {
        user ? '' : <NavLink to="/signin">
        {({ isActive }) => (
          <span className={isActive ? "text-red-500" : ""}>Sign in</span>
        )}
      </NavLink>
      }
    </>
  );
  return (
    <div className="navbar bg-base-100 w-11/12 mx-auto py-7">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {listItems}
          </ul>
        </div>
        <a className="normal-case relative flex items-center text-2xl font-saraban font-bold">
          <h1>CarWorldFleet</h1>
          <img className="w-16 absolute right-10 bottom-2.5" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex space-x-8 text-lg font-medium">{listItems}</ul>
      </div>
      <div className="navbar-end gap-4">
      <p className="font-semibold text-lg">{user?.displayName}</p>
      <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
      {
        user ?
        <button onClick={handleLogout} className="text-lg font-semibold text-white btn bg-[#CC6119] hover:bg-[#d88d5a]">Logout</button> : <Link to={'/signin'}><button className="text-lg font-semibold text-white btn bg-[#CC6119] hover:bg-[#d88d5a]">Login Now</button></Link>
       
      }
      </div>
    </div>
  );
};

export default Navbar;
