import React from "react";
import "../Card.css";


const Card = props => (
    <div className="card" onClick={props.photoClick}>
        <div className="img-container">
            <img alt={props.image.replace(".jpg", "")} src={require("../../images" + props.image)} />
        </div>
    </div>
);

