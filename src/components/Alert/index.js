import React from "react";
import "./style.css";

const Alert = props => (
    <div className="alert">
        {props.message} {props.winner}
    </div>


);
export default Alert;