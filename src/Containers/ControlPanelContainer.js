import React, { Component } from 'react'
import { Button, Card, Image, Grid } from 'semantic-ui-react'

import FreqDetuneSliders from '../Inputs/FreqDetuneSliders'
import DetuneSlider from '../Inputs/DetuneSlider'
import OscTypeButton from '../Inputs/OscTypeButton'
import GainSlider from '../Inputs/GainSlider'
import PlayButton from '../Inputs/PlayButton'
import LowMidHighKnobs from '../Inputs/LowMidHighKnobs'


class ControlPanelContainer extends Component {


  render(){
    return(
    <Grid columns={1} >
      <Grid.Row>
        <Grid.Column>
          <PlayButton handleSound={this.props.handleSound} handlePause={this.props.handlePause}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <OscTypeButton handleSound={this.props.handleSound} handlePause={this.props.handlePause}/>
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
