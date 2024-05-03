import { NavLink } from "react-router-dom";
import logo from "../Assets/turuncusiyah.png"
import { useDispatch } from "react-redux";
import { clearUser } from "../features/userSlice";

const Navbar = ({login, setLogin}) => {
  const dispatch = useDispatch()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="" width={"200px"}/>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            {/* <a className="nav-link" href="/">
              Home
            </a> */}
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/people">
              People
            </a> */}
            <NavLink to="/people" className="nav-link">People</NavLink>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#">
              Paths
            </a>
          </li> */}
          <li className="nav-item">
            {/* <a className="nav-link" href="#">
              Login
            </a> */}
            {/* <NavLink to={"/login"} className={"nav-link"}>Login</NavLink> */}

            {login ? (
              <div className="nav-link" onClick={() => {
                setLogin(false)
                dispatch(clearUser())
              }}>Logout</div>
            ) : (
              <NavLink to={"/login"} className={"nav-link"}>Login</NavLink>
            )  }

          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
