import React from "react";

class CityCard extends React.Component {
    render() {
        return (
            <div className="card">
                <div>
                    <img src={this.props.source} alt={this.props.name} style={{width: "10rem"}} />
                </div>
        
                <div className="cityName">
                    <p>
                        <strong>{this.props.name}</strong>
                        <span onClick={() => this.props.removeCard(this.props.id)}>
                            X
                        </span>
                    </p>
                </div>
    
            </div>
        )
    }
}

export default CityCard;