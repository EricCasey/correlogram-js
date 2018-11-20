import React, { Component } from "react";

class Plot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      corrData: this.props.corrData,
      height_width: this.props.height_width,
      ncol: this.props.ncol
    }
  }

  componentWillReceiveProps() {
    this.setState({ corrData: this.props.corrData })
  }

  render() {
    var o = this.props.options
    var corrBox = Object.keys(this.state.corrData).map((combo, k) => {
                    // console.log(combo)
                    var combo = this.state.corrData[combo]
                    var h_w = this.state.height_width / (this.state.ncol + 1)
                    var corr = combo.corr
                    var pos = combo.pos
                    var color = pos === 1 ? `rgba(0, 0, 255,${Math.abs(corr)})` : `rgba(255, 0, 0,${Math.abs(corr)})`
                    var borderRadius = o.shapes.elipse === true ? '50%' : '0%'

                    if(o.low_cut > Math.abs(corr)) {
                      color = 'rgba(0, 0, 0, 0)'
                    }
                    return (<div className="squarea"
                                 key={k}
                                 style={{ height: h_w,
                                          width: h_w,
                                          background: color,
                                          borderRadius: borderRadius
                                           }}>
                                    <div className="corrInfo">
                                      <p>A: {combo.a}</p>
                                      <p>B: {combo.b}</p>
                                      <p>Corr: {corr}</p>
                                    </div>
                             </div>)
                  })

    return (
      <div className="Plot">
        
        {corrBox}

      </div>
    );
  }
}

export default Plot;
