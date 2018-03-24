import React, { Component } from 'react'
import { Button, Grid } from 'semantic-ui-react'


class ButtonComp extends Component {
  state = {

  }

  handleTriangleClick = () => {
    console.log("Triangle clicked")
    this.props.handleSound("triangle")
  }

  handleSineClick = () => {
    console.log("Sine clicked")
    this.props.handleSound("sine")
  }

  handleSawtoothClick = () => {
    console.log("Sawtooth clicked")
    this.props.handleSound("sawtooth")
  }

  handlePauseClick = () => {
    console.log("Pause clicked")
    this.props.handlePause("pause")

  }


  render(){
    return(
      <Grid textAlign='center' columns={1}>
        <Grid.Column>
            <Button.Group>
              <Button onClick={this.handleTriangleClick}>Triangle</Button>
              <Button.Or />
              <Button onClick={this.handleSineClick}>Sine</Button>
              <Button.Or />
              <Button onClick={this.handleSawtoothClick}>Flattooth</Button>
            </Button.Group>
        </Grid.Column>
      </Grid>
    )
  }
}

export default ButtonComp
