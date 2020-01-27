import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div onClick={() => props.handlePicked(props.id)} className="card" >
            <div className="img-container" >
                <img alt={props.name} src={props.image}/>
            </div>
        </div>
    );
}

export default Card;