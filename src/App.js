import React from 'react';
// import './App.css';
import CityCard from "./components/CityCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cities from "./cities.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    // state will be managed in this file
    // set this.state.cities to the cities json array of objects
    this.state = {
      cities
    };
  }

  // add method to remove card on click
  removeCard = id => {
    // higher oreder filter() method generates a new array of objects based on set conditions
    // if city.id is not equal to the id of the image we click on, pass the object to the new array
    const cities = this.state.cities.filter(city => city.id !== id);
    // set this.state.cities = to new cities array of objects
    this.setState({cities});
  };


  render() {
    return (
      <Wrapper>
        <Title>Texas Cities</Title>
        {/* now, we want to use map() method to loop through our cities.json [array of objects] */}
        {this.state.cities.map(city => (
          <CityCard 
            // remember: map requires a key-value pair
            key={city.id}
            id={city.id}
            name={city.cityTX}
            source={city.src}
            // pass in method to remove city
            removeCard={this.removeCard}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;


// import logo from './logo.svg';
// {/* <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a> */}
