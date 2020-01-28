import React from "react";
import "./style.css";

const Score = props => (
    <div className="scoreCard">
        {props.type}{props.score}
    </div>
);

export default Score;