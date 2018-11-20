import React, { Component } from "react";

class Check extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  

  render() {
    let lay = this.props.layout;
    return (
      <div className="Check">
        CHECK PHASE
        (skipped)
      </div>
    );
  }
}

export default Check;
