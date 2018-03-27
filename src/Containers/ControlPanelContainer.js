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

class ControlPanelContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      sound: "",
      type: props.type,
      frequency: 50,
      gain: 50,
      distortion: 0,
      paused: true
    }
  }


  chooseType = (type) => {
    // console.log("1. ControlPanel - Type Choice: ", type)

    // this.setState({
    //   "type": type
    // }, ()=>{})

    this.props.chooseType(type)
    this.playSound()
  }

  componentDidMount(){
    console.log("updated: ", this.state.type)
  }

  playSound = () => {
    console.log("ControlPanel - Hit play")
    // this.props.sendSoundShape(this.state.type)

    let context = this.props.context
    let sound = new Sound(context)
    let now = context.currentTime;
    let paused = false

    sound.play(this.props.type, this.state.frequency)

    // this.setState({
    //   sound: sound,
    //   paused
    // }, ()=>{this.props.sound})

    this.props.getSound(sound)

  }

  pauseSound = () => {
    console.log("Control - Hit pause")
    let sound = this.props.sound
    let context = this.props.context
    let now = context.currentTime
    sound.stop(now)

    let paused = true

    this.setState({
      sound: "",
      paused
    })
  }


// SLIDERS ---------->

  handleFreqSlider = (e) => {

    if(this.props.sound){
      console.log(this.props.sound)
      console.log("Control - Freq Slider: ", e)
      let num = e * 5
      let sound = this.props.sound

      sound.changeFreqVal(num)
      this.props.handleSliderSpeedX(e)

      this.setState({
        frequency: e
      })
    }
  }

  handleGainSlider = (e) => {

    if(this.props.sound){
      console.log("Control - Gain Slider: ", e)
      let num = e/25
      let sound = this.props.sound

      sound.changeGainVal(num)
      this.props.handleSliderSpeedY(e)

      this.setState({
        gain: e
      })
    }
  }

  handleDistSlider = (e) => {
    console.log("Control - Dist Slider: ", e)

    if(this.props.sound){
      let sound = this.props.sound
      let num = e

      this.props.handleSliderSpeedW(e)

      sound.changeDistVal(num)
    }
  }




// RENDERING INPUTS --------------->

  buildPlayPause = () => {
    if(this.state.type){
      console.log("BuildPlayPause: ", this.state.type)
      if(this.props.paused){
        return <PlayButton playSound={this.playSound} />
      } else {
        return <PauseButton pauseSound={this.pauseSound} />
      }
    } else {
      return null
    }
  }

  render(){
    console.log("RENDER Type: ", this.state.type)
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
            <OscTypeButton chooseType={this.chooseType} />
          }
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>

          <FreqDetuneSliders
            changeFrequency={this.handleFreqSlider}
            changeGain={this.handleGainSlider}
            />

        </Grid.Column>
      </Grid.Row>
      <Grid.Row >
        <Grid.Column>

          <DistortionSlider
            changeDistortion={this.handleDistSlider}
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
