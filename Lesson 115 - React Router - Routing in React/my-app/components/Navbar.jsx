import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-grey-400 p-4 flex space-x-6 shadow">
      <NavLink to="/"
        className={(e) => {return e.isActive?"red" : ""}}
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-semibold" : "text-gray-800"
        }
      >
        About
      </NavLink>
    </nav>
  );
}
