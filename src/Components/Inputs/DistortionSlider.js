import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import { Radio, Segment } from 'semantic-ui-react'

class DistortionSlider extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      vertical: 50,
      radio: false
    }
  }

  handleChange = value => {
    this.setState({
      vertical: value
    })
    this.props.handleDistortionChange(value)
  };

  handleRadio = () => {
    let radio = !this.state.radio

    this.setState({
      radio
    }, ()=>{console.log(this.state.radio)})
  }

  render () {
    const { vertical } = this.state

    const verticalLabels = {
      10: 'Getting started',
      50: 'Half way',
      90: 'Almost done',
      100: 'Complete!'
    }

    const formatkg = value => value + ' kg'
    const formatPc = p => p + '%'

    return (
      <div>
        <Segment compact>
          <Radio slider label={"Distortion"} onChange={this.handleRadio}/>
        </Segment>

        <div className='slider custom-labels'>
          <Slider
            value={vertical}
            orientation='horizontal'
            format={formatPc}

            onChange={this.handleChange}
          />
          <div className='value'>{formatPc(vertical)}</div>
          <div>Distortion</div>
        </div>
      </div>
    )
  }
}

export default DistortionSlider
