import React, { Component } from "react";
import CardList from "./CardList.js";
import TimeSections from "./TimeSections.js";
import axios from 'axios';

const dinosaursTaxa = require('./dinosaurs-taxa.json');
const dinosaurSizes = require('./dinosaurs-size.json');
const timeScale = require('./geological-time-scale.json');

class App extends Component {
  constructor() {
    super();
    this.state = {
      dinosaurs: ["dinosauria", "empty"],
      dinosaursTaxa: dinosaursTaxa,
      dinosaurSizes: dinosaurSizes,
      timeScale: timeScale
    };
  }

  onSomethingChange(event) {
    console.log('onSomethingChange', event);
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

    let timeSections;
    if (this.state.timeScale !== undefined && this.state.retrievedData) {
      timeSections = <TimeSections timeScale={this.state.timeScale} />
    }

    return (
      <div className="m-5">
        <h1 className="display-4 mb-5">Dinosaur App</h1>
        { timeSections }
        { cardlist }
      </div>
    );
  }
}

export default App;
