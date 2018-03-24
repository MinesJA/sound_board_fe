import React, { Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

import InputCard from '../InputCard'
import SliderBar from '../Inputs/SliderBar'
import ButtonComp from '../Inputs/ButtonComp'

class ControlPanelContainer extends Component {


  render(){
    return(
      <div>

        <InputCard inputType={"Button"} handleSound={this.props.handleSound} handlePause={this.props.handlePause}/>
        <InputCard handleSliderOne={this.props.handleSliderOne}inputType="SliderBar" />
        <InputCard inputType="SliderBar" />

      </div>
    )
  }
}

export default ControlPanelContainer
