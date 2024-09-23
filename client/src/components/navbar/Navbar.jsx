import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { API_BASE_URL } from "../../config"; // Add this import

const Navbar = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const handleLoginClick = () => {
    window.location.href = `${API_BASE_URL}/auth/login`;
  };

  const handleRegisterClick = () => {
    window.location.href = `${API_BASE_URL}/auth/register`;
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