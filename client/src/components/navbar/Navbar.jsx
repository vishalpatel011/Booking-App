import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const handleLoginClick = () => {
    navigate("/login"); // Redirect to the login page on button click
  };
  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLogoutClick = () => {
    // Remove user data from local storage
    localStorage.removeItem("user");

    // Update the authentication context
    dispatch({ type: "LOGOUT" });

    // Optionally, navigate to the home page
    navigate("/");

    console.log("Logout clicked");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">booking.com</span>
        </Link>
        {user ? (
          <div className="userContainer">
            <span className="greeting">Hello, {user.username}</span>
            <button className="logoutButton" onClick={handleLogoutClick}>LogOut</button>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton" onClick={handleRegisterClick}>Register</button>
            <button className="navButton" onClick={handleLoginClick}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;