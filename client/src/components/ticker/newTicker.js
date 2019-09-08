// import React from "react";
import Ticker from "react-ticker";
import React, { Component, useEffect, useState } from "react";
import API from "../../utils/API";
import { throwStatement } from "@babel/types";

class NewTicker extends React.Component {
  state = {
    score: {},
    names: []
  };
  componentDidMount() {
    this.loadScores();
  }

  loadScores = () => {
    API.getScores()
      .then(res => {
        console.log(res.data);
        this.setState({
          score: res.data
        });
      })
      .catch(err => console.log(err));
  };

  TextFromApi = () => {
    const namesFromTable = [];
    // const [text, setText] = useState("");
    useEffect(() => {
      
  });
  }

  render() {
    return (
      <div>
        <h2>Ticker</h2>
        <Ticker offset="run-in" speed={10}>
          {/* {GetTextFromAPI} */}
          {/* {this.TextFromApi()} */}
        </Ticker>
      </div>
    );
  }
}

export default NewTicker;
