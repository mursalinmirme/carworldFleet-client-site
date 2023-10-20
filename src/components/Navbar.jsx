import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png';
import { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";
import Swal from "sweetalert2";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const { user, userLogout } = useContext(authContext);
  const [theme, setTheme] = useState(localStorage.getItem('websiteTheme') ? localStorage.getItem('websiteTheme') : 'light');
  // console.log(theme);
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

// for handle theme

const handleTheme = (e) => {
  if(e.target.checked){
    setTheme('dark')
  }else{
    setTheme('light')
  }
}

useEffect(() =>{
  localStorage.setItem('websiteTheme', theme);
  const getTheme = localStorage.getItem('websiteTheme');
  document.querySelector('html').setAttribute('data-theme', getTheme);
}, [theme]);

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
      {
        user && <span onClick={handleLogout} className="lg:hidden">Logout</span>
      }
    </>
  );
  return (
    <div className="navbar bg-base-100 w-11/12 mx-auto px-0 py-3 md:py-7">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-5 shadow bg-base-100 rounded-none text-base space-y-2 w-60"
          >
            {listItems}
          </ul>
        </div>
        <a className="normal-case relative flex items-center text-lg md:text-xl lg:text-2xl font-saraban font-bold">
          <h1 className="mb-1 md:mb-0">CarWorldFleet</h1>
          <img className="w-16 absolute right-10 bottom-2.5" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex space-x-8 text-lg font-medium">{listItems}</ul>
      </div>
      <div className="navbar-end gap-3.5 lg:gap-4">
      <div className={`${user ? 'mr-0 md:mr-20 mt-1.5 md:mt-0' : 'mr-0 md:mr-40 mt-1.5 md:mt-0'}`}>
      <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input onChange={handleTheme} className="" type="checkbox" checked={theme === 'light' ? false : true} />
      
      {/* sun icon */}
      <svg className="swap-on fill-current w-6 h-6 lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
      
      {/* moon icon */}
      <svg className="swap-off fill-current w-6 h-6 lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
      
    </label>
      </div>
        {
          user && <p className="font-semibold lg:text-base md:text-lg">{user?.displayName}</p>
        }
        {
          user && <img className="w-10 h-10 lg:w-12 lg:h-12 rounded-full" src={user?.photoURL} alt="" />
        }
      {
        user ?
        <button onClick={handleLogout} className="text-lg hidden lg:block font-semibold text-white btn bg-[#CC6119] hover:bg-[#d88d5a]">Logout</button> : <Link to={'/signin'}><button className="md:text-lg font-semibold text-white btn bg-[#CC6119] hover:bg-[#d88d5a]">Login Now</button></Link>
       
      }
      </div>
    </div>
  );
};

export default Navbar;
