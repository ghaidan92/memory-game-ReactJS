import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div>
    <p className="card-text">Click Count: {props.count}</p>
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <span onClick={() => props.shuffleFriends(props.id)} className="remove">𝘅</span>
    </div>
    </div>
  );
}

export default FriendCard;
