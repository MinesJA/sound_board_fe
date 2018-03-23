import React, { Component } from 'react'
import { Button, Card } from 'semantic-ui-react'

import Slider, { Range } from 'rc-slider';
import ButtonComp from './Inputs/ButtonComp'
import SliderBar from './Inputs/SliderBar'



class InputCard extends Component {


  buildSliderOrButton = () => {
    switch(this.props.inputType){

      case "SliderBar":
      return (
        <Card>
          <Card.Content>
            <SliderBar handleSliderOne={this.props.handleSliderOne} />
          </Card.Content>
        </Card>
      )
      break;

      case "Button":
      return(
        <Card>
          <Card.Content>
            <ButtonComp handleSound={this.props.handleSound} handlePause={this.props.handlePause}/>
          </Card.Content>
        </Card>
      )
      break;
      default:
      return(<p>No Input</p>)
    }
  }

  render(){
    return(
      <div>
        {this.buildSliderOrButton()}
      </div>
    )
  }
}

export default InputCard
