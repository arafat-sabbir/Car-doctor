import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import logo from '../../assets/logo.svg'
import { useContext } from "react";
import { Context } from "../../Components/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(Context)
  const navLinks = <>
    <li><NavLink activeClassName='arafat' to={'/'} >Home</NavLink></li>
    <li><a href="#whyus">Why Us</a></li>
    <li><a href="#services" >Service</a></li>
    <li><NavLink to={'/blog'} >Blog</NavLink></li>
    <li><NavLink to={'/contact'}>Contact</NavLink></li>
   {
    user? <li><NavLink to={'/bookings'}>My Bookings</NavLink></li>:''
   }
  </>
  const handleLogOut = () => {
    logOutUser()
  }
  return (
    <div className="navbar bg-base-100 my-2 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <Link to={'/'}><img src={logo} alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <Link className=" border mr-4  btn border-[#FF3811] hover:border-[#FF3811] bg-transparent hover:bg-transparent text-[#FF3811]  py-3 px-5 rounded-md">Appointment</Link>
      </div>
      {
        user ? <details className="dropdown dropdown-bottom dropdown-end">
          <summary className="dropdown">
           {
            user?.photoURL? <img src={user?.photoURL} className="w-16 rounded-full" />:<p>{user?.displayName}</p>
           }
          </summary>
          <ul tabIndex={0} className="dropdown-content z-[1] menu  p-none  w-32 mt-4 ">
            <button onClick={handleLogOut} className=" btn btn-error text-white ">
              Sign Out
            </button>
          </ul>
        </details> : <Link to={'/signIn'}>
          <button className=" border  btn border-[#FF3811] hover:border-[#FF3811] bg-transparent hover:bg-transparent text-[#FF3811]  py-3 px-5 rounded-md">
            Sign In
          </button>
        </Link>
      }
    </div>
  );
};

export default Navbar;