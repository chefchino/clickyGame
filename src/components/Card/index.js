import React from "react";
import "./style.css";

function Card(props) {
    // function handlePicked() {
        
    //     console.log("clicked", this)
    // }
    // console.log(name
    return (
        <div  className="card" >
            <div 
            onClick={props.handlePicked}
            className="img-container"
            key={props.id}
            name={props.name} 
            style={{ backgroundImage: `url(${props.image})`}}
            >
                {/* <img alt={props.name} src={props.image}/> */}
            </div>
        </div>
    );
}

export default Card;