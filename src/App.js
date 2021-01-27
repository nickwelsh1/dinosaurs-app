import React, { Component } from "react";
import CardList from "./CardList.js";
import axios from 'axios';
// import { dinosauria } from './dinosurs-taxa.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dinosaurs: ["dinosauria", "empty"]
    };
  }

  onSomethingChange(event) {
    console.log(event);
  }

  componentDidMount() {
    axios
    .get(
      "https://paleobiodb.org/data1.2/occs/taxa.json?datainfo&rowcount&base_name=stegosauria&abundance=count:5&show=full&order=firstapp&textresult&limit=100"
    )
    .then((response) => {
      // handle success
      // console.log('state dinosaurs: ', response.data.records );
      this.setState({ dinosaurs: response.data.records });
      this.setState({ retrievedData: true });
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
    .then(() => {});
  }



  render() {
    let cardlist;
    if (this.state.dinosaurs !== undefined && this.state.retrievedData) {
      cardlist = <CardList dinosaurs={this.state.dinosaurs} />
    }
    return (
      <div>
        <h1>Dinosaur App</h1>
        { cardlist }
      </div>
    );
  }
}

export default App;
