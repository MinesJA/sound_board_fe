import React, { Component } from 'react';

import './App.css';

class App extends Component {






  render() {
    let context = new AudioContext();
    let sound = context.createOscillator();

    sound.frequency.value = 100
    sound.connect(context.destination)
    sound.type = 'triangle'

    console.log(sound)

    return (
      <div>
        

      </div>
    );
  }
}

export default App;
