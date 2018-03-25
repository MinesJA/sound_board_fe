import React, { Component } from 'react'
import { Button, Grid } from 'semantic-ui-react'

const PlayButton = (props) => (

  <Grid textAlign='center' columns={1}>
    <Grid.Column>
      <Button.Group>
        <Button icon='play' onClick={props.playSound} />
      </Button.Group>
    </Grid.Column>
  </Grid>

)

export default PlayButton
