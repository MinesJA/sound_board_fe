import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import ControlPanelContainer from './ControlPanelContainer'
import ShapeContainer from './ShapeContainer'

let context = new AudioContext()
let sound = context.createOscillator()

class InterfaceContainer extends Component {
  state = {
    frequency: 100,
    type: "",
    pause: false
  }

  stopSound = () => {
    sound.stop()
  }

  createSound = (type) => {
      this.setState({
        type
      }, ()=>{this.startSound()})
  }


  startSound = () => {
    sound.frequency.value = this.state.frequency;
    sound.connect(context.destination)
    sound.type = this.state.type
    sound.start()

    console.log(sound)
  }

  changeFrequency = () => {
    
  }


  render(){
    return(
      <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={5}>
            <ControlPanelContainer handleSound={this.createSound} handlePause={this.stopSound} />
          </Grid.Column>
          <Grid.Column width={10}>
            {this.state.type ? <ShapeContainer type={this.state.type}/> : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}




export default InterfaceContainer
