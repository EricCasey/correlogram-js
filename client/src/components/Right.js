import React, { Component } from "react";

class Right extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let lay = this.props.layout;
    return (
      <div className="Right" style={{
        width: lay.right ? '300px' : '36px',
        height: lay.foot ? 'calc(100% - 300px)' : 'calc(100% - 36px)'
    }}>
        <div id="hoverBox-Right" onClick={this.props.layoutToggle}>{`<`}</div>
        <h2 style={{
              transform: lay.right ? 'rotate(0deg)' : 'rotate(270deg)',
              margin: lay.right ? '0 0 0 0' : '110px 0 0 -10px',
              width: lay.right ? '300px' : '1000px'
            }}>RICKY</h2>
      </div>
    );
  }
}

export default Right;
