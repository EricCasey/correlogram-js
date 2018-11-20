import React, { Component } from "react";

import Drop from './modules/Drop.js';
import Check from './modules/Check.js';
import Calc from './modules/Calc.js';
import Plot from './modules/Plot.js';

import getPearCorr from './modules/functions/pearson_correlation.js';

class Action extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxState: 'drop', // drop, check, calc, gen, plot
      data_raw: ' ',
      data_clean: ' ',
      corrData: { bingo: "wings" },
      height_width: 600 // pixels
    }
    this.boxChange = this.boxChange.bind(this);
    this.csvLoad = this.csvLoad.bind(this);
    this.getPearCorr = getPearCorr.bind(this);
  }

  // CONTROLS
  boxChange(boxState) { this.setState({ boxState }) }

  // INITIALIZATION / LOAD
  csvLoad(data, name) {
    var n = data[0].length
    var ncol = n
    console.log(name, n)

    var data_tpose = data.map((col, i) => data.map(row => row[i]))
    var data_clean = {};
    var featureList = [];

    data_tpose.map((col, i) => {
      var data_strings = col.splice(1,col.length)
      var data_numbers = data_strings.map(Number)
      if(i < n) {
        featureList.push(col[0])
        data_clean[col[0]] = data_numbers
      }
    })

    var combos = [];
    for(var i = 0; i < featureList.length; i++) {
         for(var j = 0; j < featureList.length; j++) {
            combos.push(featureList[i] + '-' + featureList[j])
         }
    }

    var corrData = {}
    for(var x = 0; x < combos.length; x++) {
      // console.log(combos[x].split('-'));
      var a = combos[x].split('-')[0]
      var b = combos[x].split('-')[1]
      var corr = getPearCorr(data_clean[a], data_clean[b])
      var pos = corr >= 0 ? 1 : 0
      corrData[combos[x]] = { a: a, 
                              b: b, 
                              corr: corr,
                              pos: pos }
    }

    console.log(corrData)
    console.log(data_clean)
    
    this.setState({ data_raw: data, data_clean: data_clean, corrData: corrData, ncol: ncol })
    this.boxChange('plot');
    this.props.layoutToggle({ target: { id: '123-Left' } })
  }


  render() {
  console.log(this.state)

    let lay = this.props.layout;
    let box = <p>error</p>

    if(this.state.boxState === 'drop') {
      box = <Drop csvLoad={this.csvLoad} />
    } else if (this.state.boxState === 'check') {
      box = <Check />
    } else if (this.state.boxState === 'calc') {
      box = <Calc />
    } else if (this.state.boxState === 'plot') {
      box = <Plot corrData={this.state.corrData} 
                  height_width={this.state.height_width}
                  ncol={this.state.ncol}
                  options={this.props.options}/>
    }

    return (
      <div className="Action" style={{
        left: lay.left ? '300px' : '38px',
        width: lay.left ? 'calc(100% - 338px)' : lay.right ? 'calc(100% - 338px)' : 'calc(100% - 76px)',
        height: lay.foot ? 'calc(100% - 338px)' : 'calc(100% - 74px)',
        top: lay.head ? '300px' : '38px'
      }}>

         <div id="hero">
          <div id="boxDiv" style={{ height: this.state.height_width, width: this.state.height_width }}>

            {box}
            
          </div>
        </div>

      </div>
    );
  }
}

export default Action;
