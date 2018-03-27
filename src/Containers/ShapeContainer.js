import React, { Component } from 'react'
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ConeShape from '../Components/Shapes/ConeShape'
import PyramidShape from '../Components/Shapes/PyramidShape'
import TorusShape from '../Components/Shapes/TorusShape'

class ShapeContainer extends Component {

  handleClick = (e) => {
    this.props.handleShapeClick(e)
  }

  setShape = () => {
    console.log("In ShapeContainer: ", this.props.type)
    switch(this.props.type){

      case "triangle":
        return(<PyramidShape
          shapeSpeedX={this.props.shapeSpeedX}
          shapeSpeedY={this.props.shapeSpeedY}
          shapeSpeedW={this.props.shapeSpeedW}
           />)
      break;

      case "sine":
        return(<TorusShape
          shapeSpeedX={this.props.shapeSpeedX}
          shapeSpeedY={this.props.shapeSpeedY}
          shapeSpeedW={this.props.shapeSpeedW}
          />)
      break;

      case "sawtooth":
        return(<ConeShape
          shapeSpeedX={this.props.shapeSpeedX}
          shapeSpeedY={this.props.shapeSpeedY}
          shapeSpeedW={this.props.shapeSpeedW}
          />)
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
