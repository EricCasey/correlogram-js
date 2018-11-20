import React, { Component } from "react";


class Left extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: this.props.options
    }
    this.toggleClick = this.toggleClick.bind(this);
    this.strengthChange = this.strengthChange.bind(this);
  }

  toggleClick(x) {
    var x = x.target.id.split('-')[1]
    var o = this.state.options
    Object.keys(o.shapes).forEach(v => o.shapes[v] = false)
    o.shapes[x] = true
    this.props.raiseOptions(o)
  }

  toggleStyle(q) {
    var styleTRUE = { background: "green", marginLeft: "24px", borderColor: "black" }
    var styleFALSE = { background: "red", marginLeft: "1px", borderColor: "black" }
    var style = this.state.options.shapes[`${q}`] ? styleTRUE : styleFALSE
    return style
  }

  strengthChange(v) {
    var o = this.props.options
    var v = v.target.value
    console.log("strength change", v)
    o.low_cut = v
    this.props.raiseOptions(o)
  }

  render() {
    let lay = this.props.layout;
    return (
      <div className="Left" style={{
          width: lay.left ? '300px' : '36px',
          height: 'calc(100% - 36px)',
          top: lay.head ? '300px' : '38px'
      }}>
        <div id="hoverBox-Left" onClick={this.props.layoutToggle}>></div>
        <div id="leftCont" style={{
              width: lay.left ? '100%' : '0%'
            }}>
          <h2 style={{
              transform: lay.left ? 'rotate(0deg)' : 'rotate(90deg)',
              margin: lay.left ? '0 0 0 0' : '60px 0 0 -143px'
            }}>LAHEY</h2>
          <div id="leftList" style={{
              opacity: lay.left ? 1 : 0
            }}>

            <div className="leftO">
              <h2>SHAPES</h2>
  <div className="oCont">
  {Object.keys(this.state.options.shapes).map((shape, i) => {
                  return <div className="shapeToggle" key={i}>
                          <h5>{shape}</h5>
                          <div id={`x-${shape}`} className="switch" onClick={this.toggleClick}>
                            <div className="toggle" style={this.toggleStyle(shape)}></div>
                          </div>
                        </div>
              })}
  </div>
              
            </div>


            <div className="leftO">
              <h2>STRENGTH</h2>
              <input type="range" id="strength" name="strength" 
                     min="0" max="0.99" value={this.props.options.low_cut} step="0.01"
                     onChange={this.strengthChange}/>
            </div>

            <div className="leftO">
            <h5>adfasdf</h5>
              <div id="x-square" className="switch" onClick={this.toggleClick}>
              <div className="toggle" style={this.toggleStyle("square")}></div>
              </div>
            </div>

            
            <div className="leftO"> option 1 </div>
            <div className="leftO"> option 2 </div>
            <div className="leftO"> option 4 </div>
            <div className="leftO"> option 1 </div>
            <div className="leftO"> option 2 </div>
            <div className="leftO"> option 4 </div>
            <div className="leftO"> option 1 </div>
            <div className="leftO"> option 2 </div>
            <div className="leftO"> option 4 </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Left;
