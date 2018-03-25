import React, { Component } from 'react'
import { Button, Card, Image, Grid } from 'semantic-ui-react'

import PauseButton from '../Inputs/PauseButton'
import OscTypeButton from '../Inputs/OscTypeButton'
import FreqDetuneSliders from '../Inputs/FreqDetuneSliders'
import GainSlider from '../Inputs/GainSlider'
import LowMidHighKnobs from '../Inputs/LowMidHighKnobs'


class ControlPanelContainer extends Component {
  
  state = {
    sound: this.props.context.createOscillator()
  }


  sound = this.props.context.createOscillator()

  render(){
    return(
    <Grid columns={1} >
      <Grid.Row>
        <Grid.Column>
          <PauseButton handleSound={this.props.handleSound} handlePause={this.props.handlePause}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <OscTypeButton handleSound={this.props.handleSound}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <FreqDetuneSliders handleSound={this.props.handleSound} handlePause={this.props.handlePause}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row >
        <Grid.Column>
          <GainSlider handleSound={this.props.handleSound} handlePause={this.props.handlePause}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <LowMidHighKnobs />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    )
  }
}

export default ControlPanelContainer
