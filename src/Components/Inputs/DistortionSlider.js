import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import { Radio, Segment } from 'semantic-ui-react'

class DistortionSlider extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      vertical: props.distortion,

    }
  }

  handleChangeDistortion = value => {
    this.setState({
      vertical: value
    })
    this.props.changeDistortion(value)
  };


  render () {

    const vertical = this.state.vertical
    const formatPc = p => p + '%'

    return (
        <div className='slider custom-labels'>
          <Slider
            value={vertical}
            orientation='horizontal'

            onChange={this.handleChangeDistortion}

          />
          <div className='value'>{formatPc(vertical)}</div>
          <div>Distortion</div>
        </div>

    )
  }
}

export default DistortionSlider
