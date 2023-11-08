import { Link, NavLink } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import logo from "../../assets/images/logo.png";
import useAuth from "../../hooks/useAuth";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  const navLinks = (
    <>
      <li className=" rounded-lg hover:bg-[#a22e2e]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-[#4b1818] text-white" : undefined
          }
        >
          Home
        </NavLink>
      </li>
      <li className="rounded-lg hover:bg-[#a22e2e]">
        <NavLink
          to="/addJob"
          className={({ isActive }) =>
            isActive ? "bg-[#4b1818] text-white" : undefined
          }
        >
          Add Job
        </NavLink>
      </li>
      <li className="rounded-lg hover:bg-[#a22e2e]">
        <NavLink
          to="/myPostedJobs"
          className={({ isActive }) =>
            isActive ? "bg-[#4b1818] text-white" : undefined
          }
        >
          My Posted Jobs
        </NavLink>
      </li>
      <li className="rounded-lg hover:bg-[#a22e2e]">
        <NavLink
          to="/myBids"
          className={({ isActive }) =>
            isActive ? "bg-[#4b1818] text-white" : undefined
          }
        >
          My Bids
        </NavLink>
      </li>
      <li className="rounded-lg hover:bg-[#a22e2e]">
        <NavLink
          to="/bidRequests"
          className={({ isActive }) =>
            isActive ? "bg-[#4b1818] text-white" : undefined
          }
        >
          Bid Requests
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="absolute bg-transparent flex w-full items-center justify-between p-4 z-[100]">
      <div className="z-[100] lg:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
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
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content space-y-4">
            {/* Sidebar content here */}
            {navLinks}
          </ul>
        </div>
      </div>

      <img className="w-32" src={logo} alt="" />
      <div className="hidden lg:block">
        <ul className="menu menu-horizontal px-1 space-x-4 text-white">
          {navLinks}
        </ul>
      </div>
      {user ? (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>{user?.displayName}</a>
            </li>
            <li onClick={handleLogout}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <Link
            to="/login"
            className="btn text-xl bg-[#4b1818] text-white hover:bg-[#300b0b]"
          >
            <AiOutlineLogin />
          </Link>
        </div>
      )}
    </div>
  );
};
export default Navbar;
