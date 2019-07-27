import React from "react";

function CityCard(props) {
    return (
        <div className="card">
            <div>
                <img alt={props.name} src={props.image} />
            </div>

        <div className="cityName">
            <p>
                <strong>{props.name}</strong>
                <span onClick={() => props.removeCard(props.id)}>
                    X
                </span>
            </p>
        </div>

    </div>
    )
}

export default CityCard;