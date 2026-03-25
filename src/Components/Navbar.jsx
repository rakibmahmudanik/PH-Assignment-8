import { Link, NavLink } from "react-router";
import "../App.css";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Navlogo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="nav-active navbar  bg-white text-black justify-between px-10 md:px-14">
      <div className="navbar-center">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow  bg-white text-black'"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/apps">Apps</NavLink>
            </li>
            <li>
              <NavLink to="/install">Installation</NavLink>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-xl font-bold text-gradient text-transparent bg-clip-text flex items-center"
        >
          <img className="w-8" src={Navlogo}></img>
          <p className="text-[1.2rem]">HERO.IO</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/apps">Apps</NavLink>
          </li>
          <li>
            <NavLink to="/install">Installation</NavLink>
          </li>
        </ul>
      </div>
      <a
        href="https://github.com/rakibmahmudanik"
        target="_blank"
        rel="noopener noreferrer"
        className="btn text-white bg-gradient rounded-md "
      >
        <p className="flex justify-center items-center gap-1">
          <FontAwesomeIcon icon={faGithub} />
          <span>Contribute</span>
        </p>
      </a>
    </div>
  );
};

export default Navbar;
