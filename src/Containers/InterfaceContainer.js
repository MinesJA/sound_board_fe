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


  render(){
    return(
      <div>

      <ControlPanelContainer handleSound={this.createSound} handlePause={this.stopSound} />
      <ShapeContainer />

      </div>
    )
  }
}

export default InterfaceContainer
