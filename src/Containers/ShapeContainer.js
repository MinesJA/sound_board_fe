import React, { Component } from 'react'
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ConeShape from '../ConeShape'
import PyramidShape from '../PyramidShape'
import TorusShape from '../TorusShape'

class ShapeContainer extends Component {

  setShape = () => {
    console.log(this.props.type)
    switch(this.props.type){

      case "triangle":
        return(<PyramidShape />)
      break;

      case "sine":
        return(<TorusShape />)
      break;

      case "sawtooth":
        return(<ConeShape />)
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
