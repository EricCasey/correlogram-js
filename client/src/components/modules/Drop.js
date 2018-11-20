import React, { Component } from "react";
import CSVReader from 'react-csv-reader';

class Drop extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let lay = this.props.layout;
    return (
      <div className="Drop">
        <CSVReader
          id="csvReader" cssClass="csv-input"
          label="Select CSV" onFileLoaded={this.props.csvLoad}
          inputId="ObiWan" inputStyle={{color: 'red'}}
        />
      </div>
    );
  }
}

export default Drop;
