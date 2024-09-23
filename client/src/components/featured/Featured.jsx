import useFetch from "../../hooks/useFetch";
import "./featured.css";

const API_BASE_URL = "https://booking-app-backend-5ion.onrender.com"; // Add this line

const Featured = () => {
  const { data, loading, error } = useFetch(
    `${API_BASE_URL}/hotels/countByCity?cities=Mumbai,Pune,Ahmedabad` // Modified this line
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : error ? ( // Add error handling
        "An error occurred. Please try again later."
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/07/pune-1625115438.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Pune</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://images.odishatv.in/uploadimage/library/16_9/16_9_0/IMAGE_1661694788.webp"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Ahmedabad</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;