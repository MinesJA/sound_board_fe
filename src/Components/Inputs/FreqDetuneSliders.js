import React, { Component } from 'react'
import { Button, Card, Grid } from 'semantic-ui-react'
import Slider from 'react-rangeslider'

class FrequencySlider extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      frequency: props.frequency,
      gain: props.gain
    }
  }

  handleChangeFrequency = value => {
    this.setState({
      frequency: value
    })
    this.props.changeFrequency(value)
  };

  handleChangeGain = value => {
    this.setState({
      gain: value
    })
    this.props.changeGain(value)
  }

  render () {

    const { frequency, gain } = this.state
    const formatPc = p => p + '%'

    return (
      <Grid textAlign='center' columns={2}>
        <Grid.Column>
          <div className='slider custom-labels'>
            <Slider
              value={frequency}
              orientation='vertical'

              onChange={this.handleChangeFrequency}
            />
            <div className='value'>{formatPc(this.state.frequency)}</div>
            <div>Frequency</div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className='slider custom-labels'>
            <Slider
              value={gain}
              orientation='vertical'

              onChange={this.handleChangeGain}
            />
          <div className='value'>{formatPc(this.state.gain)}</div>
            <div>Gain</div>
          </div>
        </Grid.Column>
      </Grid>
    )
  }
}

export default FrequencySlider
