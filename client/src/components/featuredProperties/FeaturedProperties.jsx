import React, { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import { API_BASE_URL } from "../../config";

const FeaturedProperties = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API_BASE_URL}/api/hotels?featured=true&limit=4`);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="fp">
      {Array.isArray(data) && data.length > 0 ? (
        data.map((item) => (
          <div className="fpItem" key={item._id}>
            <img
              src={item.photos[0]}
              alt=""
              className="fpImg"
            />
            <span className="fpName">{item.name}</span>
            <span className="fpCity">{item.city}</span>
            <span className="fpPrice">Starting from ₹{item.cheapestPrice}</span>
            {item.rating && <div className="fpRating">
              <button>{item.rating}</button>
              <span>Excellent</span>
            </div>}
          </div>
        ))
      ) : (
        <div>No featured properties available</div>
      )}
    </div>
  );
};

export default FeaturedProperties;
