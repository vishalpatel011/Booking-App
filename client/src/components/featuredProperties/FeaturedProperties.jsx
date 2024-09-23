import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const API_BASE_URL = "https://booking-app-backend-5ion.onrender.com"; // Add this line

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(`${API_BASE_URL}/hotels?featured=true&limit=4`); // Modified this line

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : error ? ( // Add error handling
        "An error occurred. Please try again later."
      ) : (
        <>
          {data.map((item) => (
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
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;