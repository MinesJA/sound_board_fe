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
  // constructor(props){
  //   super(props);
  //
  //   this.state = {
  //     name: "",
  //     sound: "",
  //     type: "",
  //     frequency: 50,
  //     gain: 50,
  //     distortion: 0,
  //     paused: true,
  //     highPass: 800,
  //     lowPass: 880,
  //     highShelf: 4700,
  //     lowShelf: 35,
  //   }
  // }


  componentDidMount = () => {
    console.log(`CONTROLPANEL ${this.props.values.name} MOUNTED`)
  }

  chooseType = (type) => {
    
    console.log("1. ControlPanel - Type Choice: ", type)
    let newObj = this.props.values
    newObj.type = type

    this.props.updateControlObjs(newObj)
    this.playSound()
  }

  playSound = () => {
    console.log("ControlPanel - Hit play")
    // this.props.sendSoundShape(this.props.values.type)

    let context = this.props.context
    let sound = new Sound(context)
    let now = context.currentTime;

    let newObj = this.props.values
    newObj.sound = sound
    newObj.paused = false
    this.props.updateControlObjs(newObj)

    sound.play(this.props.values.type, this.props.values.frequency)

    // this.setState({
    //   sound: sound
    // })

  }

  pauseSound = () => {
    console.log("Control - Hit pause")
    let sound = this.state.sound
    let context = this.props.context
    let now = context.currentTime
    sound.stop(now)

    let paused = true

    let newObj = this.props.values
    newObj.paused = true
    this.props.updateControlObjs(newObj)

    this.setState({
      sound: "",
    })
  }


// SLIDERS ---------->

  handleFreqSlider = (e) => {

    if(this.props.values.sound){
      console.log("Control - Freq Slider: ", e)
      let num = e * 5
      let sound = this.props.values.sound

      let newObj = this.props.values
      newObj.frequency = e
      this.props.updateControlObjs(newObj)

      sound.changeFreqVal(num)
      this.props.handleSliderSpeed(e)
    }
  }

  handleGainSlider = (e) => {

    if(this.props.values.sound){
      console.log("Control - Gain Slider: ", e)
      let num = e/25
      let sound = this.props.values.sound

      let newObj = this.props.values
      newObj.gain = e
      this.props.updateControlObjs(newObj)

      sound.changeGainVal(num)
    }
  }

  handleDistSlider = (e) => {
    console.log("Control - Dist Slider: ", e)

    if(this.props.values.sound){
      let sound = this.props.values.sound
      let num = e

      let newObj = this.props.values
      newObj.distortion = e
      this.props.updateControlObjs(newObj)

      sound.changeDistVal(num)
    }
  }




// RENDERING INPUTS --------------->

  buildPlayPause = () => {
    if(this.props.values.type){
      if(this.props.values.paused){
        return <PlayButton playSound={this.playSound} />
      } else {
        return <PauseButton pauseSound={this.pauseSound} />
      }
    } else {
      return null
    }
  }

  render(){
    console.log("Control Panel: ", this.props.values.name, "RENDERED")



    return(
    <Grid celled="internally" >
      <Grid.Row>
        <Grid.Column>

          {this.buildPlayPause()}

        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>

          {this.props.values.type ?
            <OscChoice type={this.props.values.type} />
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

            frequency={this.props.values.frequency}
            gain={this.props.values.gain}
            />

        </Grid.Column>
      </Grid.Row>
      <Grid.Row >
        <Grid.Column>

          <DistortionSlider
            changeDistortion={this.handleDistSlider}
            distortion={this.props.values.distortion}
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
