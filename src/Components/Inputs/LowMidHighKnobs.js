import React, { Component } from 'react'
import TouchKnob from "react-touch-knob"
import { Button, Card, Image, Grid } from 'semantic-ui-react'

class LowMidHighKnobs extends Component{

  state = {
    highShelf: 0,
    lowShelf: 0,
    highPass: 0,
    lowPass: 0,
  }


  handleHighShelf = (value) => {
    this.props.handleHighShelf(value)

    this.setState({
      highShelf: value
    })
  }

  handleLowShelf = (value) => {
    this.props.handleLowShelf(value)

    this.setState({
      lowShelf: value
    })
  }

  handleHighPass = (value) => {
    this.props.handleHighPass(value)

    this.setState({
      highPass: value
    })
  }

  handleLowPass = (value) => {
    this.props.handleLowPass(value)

    this.setState({
      lowPass: value
    })
  }



  render(){
    return(
      <Grid textAlign='center' columns={4}>
        <Grid.Column>
          <TouchKnob
              class="my-knob-class"
              name="score"
              min="0"
              max="100"
              value={this.state.highShelf}
              onChange={this.handleHighShelf}
              onEnd={this.handleEnd}
              showNumber={true}
              />
            <div>High-Shelf</div>
        </Grid.Column>
        <Grid.Column>
          <TouchKnob
              class="my-knob-class"
              name="score"
              min="0"
              max="100"
              value={this.state.lowShelf}
              onChange={this.handleLowShelf}
              onEnd={this.handleEnd}
              showNumber={true}
              />
            <div>Low-Shelf</div>
        </Grid.Column>
        <Grid.Column>
          <TouchKnob
              class="my-knob-class"
              name="score"
              min="0"
              max="100"
              value={this.state.highPass}
              onChange={this.handleHighPass}
              onEnd={this.handleEnd}
              showNumber={true}
              />
            <div>High-Pass</div>
        </Grid.Column>
        <Grid.Column>
          <TouchKnob
              class="my-knob-class"
              name="score"
              min="0"
              max="100"
              value={this.state.lowPass}
              onChange={this.handleLowPass}
              onEnd={this.handleEnd}
              showNumber={true}
              />
            <div>Low-Pass</div>
        </Grid.Column>
      </Grid>
    )
  }
}

export default LowMidHighKnobs
