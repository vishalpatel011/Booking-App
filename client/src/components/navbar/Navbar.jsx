import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { API_BASE_URL } from "../../config"; // Add this import

const Navbar = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLoginClick = () => {
    navigate("/login");
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`navbar ${mobileMenuOpen ? 'mobileMenuOpen' : ''}`}>
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">booking.com</span>
        </Link>
        <div className="mobileMenuToggle" onClick={toggleMobileMenu}>
          ☰
        </div>
        <div className={`navItems ${mobileMenuOpen ? 'mobileMenuOpen' : ''}`}>
          {user ? (
            <div className="userContainer">
              <span className="greeting">Hello, {user.username}</span>
              <button className="logoutButton" onClick={handleLogoutClick}>LogOut</button>
            </div>
          ) : (
            <>
              <button className="navButton" onClick={handleRegisterClick}>Register</button>
              <button className="navButton" onClick={handleLoginClick}>Login</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;