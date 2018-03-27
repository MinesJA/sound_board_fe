import React from 'react'
import { Button, Grid } from 'semantic-ui-react'


const OscTypeButton = (props) => {

  const handleClick = (e) => {
    console.log("OscType - clicked type: ", e.target.name)
    props.chooseType(e.target.name)
    // props.getChoice(e.target.name)
  }




    return(
      <Grid textAlign='center' columns={1}>
        <Grid.Column>
            <Button.Group>
              <Button onClick={handleClick} name="triangle">Triangle</Button>
              <Button.Or />
              <Button onClick={handleClick} name="sine">Sine</Button>
              <Button.Or />
              <Button onClick={handleClick} name="sawtooth">Flattooth</Button>
            </Button.Group>
        </Grid.Column>
      </Grid>
    )
}

export default OscTypeButton
