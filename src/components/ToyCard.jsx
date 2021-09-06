import React from "react";
import { connect } from "react-redux";
import { likeToy, removeToy } from "../actions/toys";

const ToyCard = ({ toy, likeToy, removeToy }) => {
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{toy.likes} Likes </p>
      <button onClick={() => likeToy(toy.id, toy.likes)} className="like-btn">
        Like {"<3"}
      </button>
      <button onClick={() => removeToy(toy.id)} className="del-btn">
        Donate to GoodWill
      </button>
    </div>
  );
};

export default connect(null, { likeToy, removeToy })(ToyCard);
