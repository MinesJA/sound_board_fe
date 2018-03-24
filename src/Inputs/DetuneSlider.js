import React, { Component } from 'react'
import Slider from 'react-rangeslider'

class DetuneSlider extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      vertical: 50
    }
  }

  handleChangeVertical = value => {
    this.setState({
      vertical: value
    })
    // this.props.handleSliderOne(value)
  };

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
      <div className='slider custom-labels'>
        <Slider
          value={vertical}
          orientation='vertical'
          format={formatPc}

          onChange={this.handleChangeVertical}
        />
        <div className='value'>{formatPc(vertical)}</div>
        <div>Detune</div>
      </div>
    )
  }
}

export default DetuneSlider
