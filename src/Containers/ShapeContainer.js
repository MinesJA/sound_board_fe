import React, { Component } from 'react'
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ConeShape from '../Components/Shapes/ConeShape'
import PyramidShape from '../Components/Shapes/PyramidShape'
import TorusShape from '../Components/Shapes/TorusShape'

class ShapeContainer extends Component {

  setShape = () => {
    console.log(this.props.type)
    switch(this.props.type){

      case "triangle":
        return(<PyramidShape shapeSpeed={this.props.shapeSpeed} />)
      break;

      case "sine":
        return(<TorusShape shapeSpeed={this.props.shapeSpeed}/>)
      break;

      case "sawtooth":
        return(<ConeShape shapeSpeed={this.props.shapeSpeed}/>)
      break;

      default:
      null
    }
  }

  render() {
    return (
      <div>
      {this.setShape()}
      </div>
    )
  }
}

export default ShapeContainer;
