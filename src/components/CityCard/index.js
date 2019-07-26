import React from "react";

function CityCard(props) {
    return (
        <div className="card">
            <div>
                <img alt={props.name} src={props.image} />
            </div>
        </div>

        <div className="cityName">
            <p>
                <strong>{props.name}</strong>
                <span>X</span>
            </p>
        </div>
    )
}

export default CityCard;