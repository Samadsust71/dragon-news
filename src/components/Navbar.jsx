import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'
import { AuthContext } from "../provider/AuthProvider";



const Navbar = () => {

  const {logOutUser,user}=useContext(AuthContext)
  
  
  const links = (
    <>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/career'}>Career</Link>
      </li>
      <li>
        <Link to={'/about'}>About</Link>
      </li>
      
    </>
  );
  return (
    <div className="navbar">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {
                links
            }
          </ul>
        </div>
        <a>
          {
            user && (user?.displayName ||user.email)

          }
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {links}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-1">
          {
            user && user?.photoURL ?<img className="h-8 w-8 rounded-full object-cover border" src={user?.photoURL} alt="user"  />:<img className="h-8 w-8 rounded-full" src={userIcon} alt="user"  />
          }
            

            {
              user ? <button onClick={logOutUser}  className="py-1 px-6 bg-neutral text-white cursor-pointer font-medium">Logout</button> : <Link to={'/auth/login'} className="py-1 px-6 bg-neutral text-white cursor-pointer font-medium">Login</Link>
            }
            
        </div>
      </div>
    </div>
  );
};

export default Navbar;
