import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState({
    username: "",
    email: "",
    country: "",
    city: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      let imgUrl = "";
      if (file) {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "upload");
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/infiniter/image/upload",
          data
        );
        imgUrl = uploadRes.data.url;
      }

      const newUser = {
        ...info,
        img: imgUrl,
      };

      await axios.post("/auth/register", newUser);
      navigate("/login");
    } catch (err) {
      setError(err.response.data.message || "An error occurred during registration.");
    }
  };

  return (
    <div className="register">
      <div className="rContainer">
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="text"
          placeholder="Country"
          id="country"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="text"
          placeholder="City"
          id="city"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="tel"
          placeholder="Phone"
          id="phone"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          className="rInput"
        />
        <div className="imageUpload">
        <p>Upload Image</p>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <label htmlFor="file" className="selectImageBtn">
            Select Image
          </label>
          {file && <span className="fileName">{file.name}</span>}
        </div>
        <button onClick={handleClick} className="rButton">
          Register
        </button>
        {error && <span className="error">{error}</span>}
      </div>
    </div>
  );
};

export default Register;