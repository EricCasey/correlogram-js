import React, { Component } from "react";

// Containers
import Left from './components/Left.js';
import Right from './components/Right.js';
import Foot from './components/Foot.js';
import Action from './components/Action.js';
import Head from './components/Head.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: {
        left: false,
        right: false,
        foot: false,
        head: false
      },
      options: {
        low_cut: 0,
        shapes: {
          elipse: true,
          square: false,
          aoe: false
        }
      }
    }
    this.layoutToggle = this.layoutToggle.bind(this);
    this.raiseOptions = this.raiseOptions.bind(this);
  }

  raiseOptions(o) {
    console.log("options raised")
    this.setState({ options: o })
  }

  layoutToggle(e) {
    console.log("layout toggle", e.target.id);
    var layout = this.state.layout
    if(e.target.id.split("-")[1] === "Left") {
      console.log("LEFT Toggle");
      layout = layout.left ? { left: false, right: false, foot: false, head: false } : { left: true, right: false, foot: false, head: false } 
    } else if (e.target.id.split("-")[1] === "Right") {
      console.log("Right toggle")
      layout = layout.right ? { left: false, right: false, foot: false, head: false } : { left: false, right: true, foot: false, head: false } 
    } else if (e.target.id.split("-")[1] === "Foot") {
      console.log("foot Toggle")
      layout = layout.foot ? { left: false, right: false, foot: false, head: false } : { left: false, right: false, foot: true, head: false } 
    } else if (e.target.id.split("-")[1] === "Head") {
      console.log("head Toggle")
      layout = layout.head ? { left: false, right: false, foot: false, head: false } : { left: false, right: false, foot: false, head: true } 
    }
    this.setState({ layout });
  }

  render() {
    console.log(this.state.layout)
    return (
      <div className="App">

        <Head layoutToggle={this.layoutToggle} layout={this.state.layout}/>
        <Left options={this.state.options} raiseOptions={this.raiseOptions} layoutToggle={this.layoutToggle} layout={this.state.layout} />
        <Right layoutToggle={this.layoutToggle} layout={this.state.layout} />
        <Foot layoutToggle={this.layoutToggle} layout={this.state.layout} />

        <Action options={this.state.options} layoutToggle={this.layoutToggle} layout={this.state.layout} />

        
      </div>
    );
  }
}

export default App;
