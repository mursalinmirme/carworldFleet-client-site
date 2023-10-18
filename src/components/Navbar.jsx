import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
        <a className="normal-case text-2xl font-saraban font-bold">CarWorldFleet</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex space-x-8 text-lg font-medium">{listItems}</ul>
      </div>
      <div className="navbar-end">
        <Link to={'/signin'}><button className="text-lg font-semibold text-white btn bg-[#CC6119] hover:bg-[#d88d5a]">Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
