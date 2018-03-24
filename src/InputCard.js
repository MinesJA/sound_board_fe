import React, { Component } from 'react'
import { Button, Card, Grid } from 'semantic-ui-react'
import Slider, { Range } from 'rc-slider';
import DetuneSlider from './Inputs/DetuneSlider'
import FrequencySlider from './Inputs/FrequencySlider'
import GainSlider from './Inputs/GainSlider'

import ButtonComp from './Inputs/ButtonComp'


class InputCard extends Component {


  buildComponents = () => {
    switch(this.props.inputType){

      case "FreqDetuneSliders":
      return (
        <Grid textAlign='center' columns={2}>
          <Grid.Column>
            <DetuneSlider />
          </Grid.Column>
          <Grid.Column>
            <FrequencySlider />
          </Grid.Column>
        </Grid>
      )
      break;

      case "GainSlider":
      return(
        <Grid textAlign='center' columns={1}>
          <Grid.Column>
            <GainSlider handleSound={this.props.handleSound} handlePause={this.props.handlePause}/>
          </Grid.Column>
        </Grid>
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
      {this.buildComponents()}
      </div>
    )
  }
}

export default InputCard
