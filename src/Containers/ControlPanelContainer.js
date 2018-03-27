import React, { Component } from 'react'
import { Button, Card, Image, Grid } from 'semantic-ui-react'
import OscTypeButton from '../Components/Inputs/OscTypeButton'
import FreqDetuneSliders from '../Components/Inputs/FreqDetuneSliders'
import DistortionSlider from '../Components/Inputs/DistortionSlider'
import PlayButton from '../Components/Inputs/PlayPauseReset/PlayButton'
import PauseButton from '../Components/Inputs/PlayPauseReset/PauseButton'
import OscChoice from '../Components/OscChoice'

import Sound from '../Sound.js'
const uuidv1 = require('uuid/v1'); // uuidv1();

// import SetSoundsButton from '../Components/Inputs/SetSoundsButton'
// import PlayButton from '../Components/Inputs/PlayButton'
// import LowMidHighKnobs from '../Components/Inputs/LowMidHighKnobs'

// Having a bigger issues with toggles turning back to their initial state when I
// change anything (see pause and distortion states with booleans)

class ControlPanelContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: props.values.name,
      sound: "",
      type: props.values.type,
      frequency: props.values.frequency,
      gain: props.values.gain,
      distortion: props.values.distortion,
      paused: true,
      // highPass: 800,
      // lowPass: 880,
      // highShelf: 4700,
      // lowShelf: 35,
    }
  }

  componentDidMount = () => {
    console.log(this.state)
  }



  chooseType = (type) => {
    console.log("1. ControlPanel - Type Choice: ", type)

    this.setState({
      type: type,
    }, ()=>{this.playSound()})
  }


  playSound = () => {
    console.log("ControlPanel - Hit play")
    let context = this.props.context
    let sound = new Sound(context)
    let now = context.currentTime;

    sound.play(this.state.type, this.state.frequency)

    let paused = !this.state.paused

    this.setState({
      paused: paused,
      sound: sound
    }, ()=>{console.log("Control - Play hit. Pause state: ", this.state.paused, "Type state:", this.state.type)})
  }

  pauseSound = () => {
    console.log("Control - Hit pause")
    let sound = this.state.sound
    let context = this.props.context
    let now = context.currentTime
    sound.stop(now)

    let paused = !this.state.paused

    this.setState({
      sound: "",
      paused: paused
    }, ()=>{console.log("Control - Pause hit. Pause state: ",this.state.paused, "Type state:",this.state.type)})
  }


// SLIDERS ---------->

  handleFreqSlider = (e) => {
    console.log("Control - Gain Slider: ", e)
    this.setState({
      frequency: e
    })

    if(this.state.sound){
      let num = e * 5
      let sound = this.state.sound

      sound.changeFreqVal(num)
    }
    // this.props.sendSound(this.state.type,this.state.frequency)
    // this.props.handleSliderSpeed(this.state.frequency)
  }

  handleGainSlider = (e) => {
    console.log("Control - Gain Slider: ", e)
    this.setState({
      gain: e
    })

    if(this.state.sound){
      let num = e/25
      let sound = this.state.sound

      sound.changeGainVal(num)
    }
  }

  handleDistSlider = (e) => {
    console.log("Control - Dist Slider: ", e)
    this.setState({
      distortion: e
    })

    if(this.state.sound){
      let sound = this.state.sound
      let num = e

      sound.changeDistVal(num)
    }
  }




// RENDERING INPUTS --------------->

  buildPlayPause = () => {
    if(this.state.type){
      if(this.state.paused){
        return <PlayButton playSound={this.playSound} />
      } else {
        return <PauseButton pauseSound={this.pauseSound} />
      }
    } else {
      return null
    }
  }

  render(){
    console.log("Control Panel: ", this.state.name, "RENDERED")

    this.props.updateControlObjs(this.state)

    return(
    <Grid celled="internally" >
      <Grid.Row>
        <Grid.Column>

          {this.buildPlayPause()}

        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>

          {this.state.type ?
            <OscChoice type={this.state.type} />
            :
            <OscTypeButton chooseType={this.chooseType}/>
          }
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>

          <FreqDetuneSliders
            changeFrequency={this.handleFreqSlider}
            changeGain={this.handleGainSlider}
            frequency={this.state.frequency}
            gain={this.state.gain}/>

        </Grid.Column>
      </Grid.Row>
      <Grid.Row >
        <Grid.Column>

          <DistortionSlider
            changeDistortion={this.handleDistSlider}
            distortion={this.state.distortion}
            />

        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>

        </Grid.Column>
      </Grid.Row>
    </Grid>

    )
  }
}

export default ControlPanelContainer


// handleLowPassKnob = (num) => {
//   if(this.state.sound){
//     let sound = this.state.sound
//     let type = "lowPass"
//
//     console.log("LowPass Slider Num: ", num)
//
//     sound.changeLowPassVal(num)
//
//     this.setState({
//       lowPass: num
//     }, ()=>{console.log("LowPass val: ", this.state.lowPass)})
//   }
// }
//
// handleHighPassKnob = (num) => {
//   if(this.state.sound){
//     let sound = this.state.sound
//     let type = "highPass"
//
//     console.log("HighPass Slider Num: ", num)
//
//     sound.changeHighPassVal(num)
//
//     this.setState({
//       highPass: num
//     }, ()=>{console.log("HighPass val: ", this.state.highPass)})
//   }
// }
//
// handleLowShelfKnob = (num) => {
//   if(this.state.sound){
//     let sound = this.state.sound
//     let type = "lowShelf"
//
//     console.log("LowShelf Slider Num: ", num)
//
//     sound.changeLowShelfVal(num)
//
//     this.setState({
//       lowShelf: num
//     }, ()=>{console.log("LowShelf val: ", this.state.lowShelf)})
//   }
// }
//
// handleHighShelfKnob = (num) => {
//   if(this.state.sound){
//     let sound = this.state.sound
//
//     console.log("HighShelf Slider Num: ", num)
//
//     sound.changeHighShelfVal(num)
//
//     this.setState({
//       highShelf: num
//     }, ()=>{console.log("HighShelf val: ", this.state.highShelf)})
//   }
// }
