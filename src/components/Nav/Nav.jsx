import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Intern House
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/" aria-current="page">
                Job Postings
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/jobs/new">
                Post a Job
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
