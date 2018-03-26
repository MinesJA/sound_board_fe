import React, { Component } from 'react'
import { Button, Card, Image, Grid } from 'semantic-ui-react'
import SetSoundsButton from '../Components/Inputs/SetSoundsButton'
// import PlayButton from '../Components/Inputs/PlayButton'
import OscTypeButton from '../Components/Inputs/OscTypeButton'
import FreqDetuneSliders from '../Components/Inputs/FreqDetuneSliders'
import DistortionSlider from '../Components/Inputs/DistortionSlider'
import LowMidHighKnobs from '../Components/Inputs/LowMidHighKnobs'
import OscChoice from '../Components/OscChoice'
import ShapeContainer from './ShapeContainer'

// Having a hard time with the play / pause buttons.
// Will play but won't pause. May have something to with the dot notation
//  used in SetSoundsButton

// May be able to use gainNode to pause
// (set gain on gainNode to 0 on pause, on play reset to state value of gain)

// Having a bigger issues with toggles turning back to their initial state when I
// change anything (see pause and distortion states with booleans)


class ControlPanelContainer extends Component {
  state = {
    sound: "",
    gainNode: "",
    type: "",
    frequency: 100,
    gain: 100,
    paused: true,
    distortionOn: false,
    distortionNode: "",
    distortion: 0,
  }



  chooseType = (type) => {
    this.setState({
      type,
      paused: false
    }, ()=>{this.playSound()})
  }

  playSound = (event) => {
    let context = this.props.context
    this.setState({
      pause: false,
      sound: context.createOscillator(),
      gainNode: context.createGain(),
    }, ()=>{

      let sound = this.state.sound
      let gainNode = this.state.gainNode

      sound.type = this.state.type
      sound.frequency.value = this.state.frequency;

      sound.start()

      gainNode.gain.value = this.state.gain;
      sound.connect(gainNode)
      gainNode.connect(context.destination)

      // context -> gainNode -> sound

      console.log("Play-Pause state:",this.state.paused, "Type state:",this.state.type)
    })
    this.props.sendSoundShape(this.state.type)
  }

  pauseSound = (event) => {
    let sound = this.state.sound
    sound.stop()
    sound.disconnect()

    this.setState({
      sound: "",
      paused: true
    }, ()=>{console.log("Pause-Pause state:",this.state.paused, "Type state:",this.state.type)})
  }


  handleFreqSlider = (e) => {
    if(this.state.sound){
      let sound = this.state.sound
      let num = e*10
      console.log(num)

      sound.frequency.value = num
      this.setState({
        frequency: num,
        shapeY: num
      }, ()=>{console.log(this.state.frequency)})
    }
    // this.props.sendSound(this.state.type,this.state.frequency)
    this.props.handleSliderSpeed(this.state.frequency)
  }

  handleGainSlider = (e) => {
    if(this.state.sound){
      let gainNode = this.state.gainNode

      console.log(e)

      gainNode.gain.value = e
      this.setState({
        gain: e,
        shapeX: e
      }, ()=>{console.log(this.state.gain)})
    }
  }

  toggleDistortion = (e) => {
    e.preventDefault()
    let context = this.props.context
    let distortionNode = context.createWaveShaper()
    let distortionOn = !this.state.distortionOn
    distortionNode.curve = this.makeDistortionCurve(400);
    distortionNode.oversample = '4x';

    this.setState({
      distortionOn: distortionOn,
      distortionNode: distortionNode,
    }, ()=>{console.log("DistortionNode: ",this.state.distortionNode)})
  }


  handleDistortionChange = (e) => {

    console.log(this.state.sound, this.state.distortionOn)

    if(this.state.sound){
      console.log(e)
      let distortionNode = this.state.distortionNode

      distortionNode.curve = this.makeDistortionCurve(e);
    }
  }

  makeDistortionCurve = (amount) => {
    var k = typeof amount === 'number' ? amount : 50,
      n_samples = 44100,
      curve = new Float32Array(n_samples),
      deg = Math.PI / 180,
      i = 0,
      x;
    for ( ; i < n_samples; ++i ) {
      x = i * 2 / n_samples - 1;
      curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
    }
    console.log(curve)
    return curve;

  }




// RENDERING INPUTS

  buildPlayPause = () => {
    if(this.state.type){
      if(this.state.paused){
        return <SetSoundsButton.PlayButton playSound={this.playSound} />
      } else {
        return <SetSoundsButton.PauseButton pauseSound={this.pauseSound} />
      }
    } else {
      return null
    }
  }

  componentWillReceiveProps(){

    // console.log(this.state.sound.frequency)
    // //    sound.frequency.value = fr
    // if(this.state.sound){
    //    let sound = this.state.sound
    //    let fr = this.props.newFrequency
    //    sound.frequency.value = fr
    //    this.setState({
    //      frequency: fr
    //    })
    // }
  }

  render(){

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
          <FreqDetuneSliders changeFrequency={this.handleFreqSlider} changeGain={this.handleGainSlider}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row >
        <Grid.Column>
          <DistortionSlider turnOnDistortion={this.toggleDistortion} handleDistortionChange={this.handleDistortionChange}/>
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
