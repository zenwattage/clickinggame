import React from "react";
import "../Card/Card.css";


const Card = props => (
    <div className="card" onClick={props.photoClick}>
        <div className="img-container">
            <img alt={props.photo.replace(".jpg", "")} src={require("../../images/" + props.photo)} />
        </div>
    </div>
);

export default Card;

