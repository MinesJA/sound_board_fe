import React, { Component } from 'react'
import TouchKnob from "react-touch-knob"
import { Button, Card, Image, Grid } from 'semantic-ui-react'

class LowMidHighKnobs extends Component{



  render(){
    return(
      <Grid textAlign='center' columns={3}>
        <Grid.Column>
          <TouchKnob
              class="my-knob-class"
              name="score"
              min="0"
              max="100"
              value="44"
              onChange={this.handleChange}
              onEnd={this.handleEnd}
              showNumber={true}
              />
            <div>Low</div>
        </Grid.Column>
        <Grid.Column>
          <TouchKnob
              class="my-knob-class"
              name="score"
              min="0"
              max="100"
              value="44"
              onChange={this.handleChange}
              onEnd={this.handleEnd}
              showNumber={true}
              />
              <div>Mid</div>
        </Grid.Column>
        <Grid.Column>
          <TouchKnob
              class="my-knob-class"
              name="score"
              min="0"
              max="100"
              value="44"
              onChange={this.handleChange}
              onEnd={this.handleEnd}
              showNumber={true}
              />
              <div>High</div>
        </Grid.Column>
      </Grid>
    )
  }
}

export default LowMidHighKnobs
