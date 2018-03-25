import React, { Component } from 'react'
import { Button, Card, Grid } from 'semantic-ui-react'
import Slider from 'react-rangeslider'

class FrequencySlider extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      frequency: 50,
      gain: 50
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
    // const { vertical } = this.state

    // const verticalLabels = {
    //   10: 'Getting started',
    //   50: 'Half way',
    //   90: 'Almost done',
    //   100: 'Complete!'
    // }

    const formatkg = value => value + ' kg'
    const formatPc = p => p + '%'

    return (
      <Grid textAlign='center' columns={2}>
        <Grid.Column>
          <div className='slider custom-labels'>
            <Slider
              value={this.state.frequency}
              orientation='vertical'
              format={formatPc}

              onChange={this.handleChangeFrequency}
            />
            <div className='value'>{formatPc(this.state.frequency)}</div>
            <div>Frequency</div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className='slider custom-labels'>
            <Slider
              value={this.state.gain}
              orientation='vertical'
              format={formatPc}

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
