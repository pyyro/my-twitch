import { Link } from "react-router-dom";


const Navbar = ({user, setUser}) => {

  const logOutHandler = () => {
    window.localStorage.removeItem("access_token");
    setUser(false)
  }

  return (
      <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            My Twitch
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/followedlive"
                >
                  Followed Live Streams
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/topstreams"
                >
                  Top Live Streams
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/allgames"
                >
                  Top Games 
                </Link>
              </li>
            </ul>
          </div>
          {user && <button onClick={logOutHandler}>Log Out</button>}
        </div>
      </nav>
  );
};

export default Navbar;
