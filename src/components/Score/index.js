import React from "react";
import "./style.css";

const Score = props => (
    <div className="scoreCard">
        {props.score}
    </div>
);

export default Score;