import React, { Component } from "react";

export class App extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log("props values : ", this.props.fetched_data);
    console.log("error values : ", this.props.error_values);
    return (
      <div>
        <p>{this.props.error_values.code}</p>
      </div>
    );
  }
}

export default App;
