import React from "react";
import axios from "axios";
import Rating from "react-rating-stars-component";

const ReadMorePopup = ({ playground_id, readMorePopupOpen, setReadMorePopupOpen }) => {
  const [reviews, setReviews] = React.useState([]);

  const getReviews = async () => {
    try {
      const response = await axios.get(`/api/playgrounds/${playground_id}/reviews`);
      setReviews(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    if (readMorePopupOpen) {
      getReviews();
    }
  }, [readMorePopupOpen]);

  return (
    <div className={readMorePopupOpen ? "popup-wrapper active" : "popup-wrapper"}>
      <div className="popup">
        <button className="close-btn" onClick={() => setReadMorePopupOpen(false)}>
          &times;
        </button>
        <h2>Reviews</h2>
        {reviews.map((review) => (
          <div key={review.id} className="review-item">
            <div className="rating-container">
              <p className="rating-label">Rating:</p>
              <Rating
                size={20}
                edit={false}
                value={review.rating}
                activeColor="#ffd700"
              />
            </div>
            <p className="comment-label">Comment:</p>
            <p className="comment-text">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadMorePopup;
