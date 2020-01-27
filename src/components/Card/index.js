import React from "react";
import "./style.css";

function Card(props) {
    function handlePicked() {
        console.log("clicked")
    }
    return (
        <div  className="card" >
            <div onClick={handlePicked}className="img-container" >
                <img alt={props.name} src={props.image}/>
            </div>
        </div>
    );
}

export default Card;